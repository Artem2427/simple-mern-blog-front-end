import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import UserInfo from "../UserInfo";
import PostSkeleton from "./Skeleton";

import useStyles from "./style";
import { useAppDispatch } from "../../utils/redux";
import { fetchRemovePost } from "../../store/posts/reducer";

interface Props {
  _id?: string;
  title?: string;
  createdAt?: string;
  imageUrl?: string;
  user?: {
    avatarUrl?: string;
    fullName?: string;
  };
  viewsCount?: number;
  commentsCount?: number;
  tags?: string[];
  children?: ReactNode;
  isFullPost: boolean;
  isLoading: boolean;
  isEditable: boolean;
}

const Post: FC<Props> = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <PostSkeleton />;
  }

  const onClickRemove = () => {
    if (_id) {
      if (window.confirm("Вы действительно хотите выйти?")) {
        dispatch(fetchRemovePost(_id));
      }
    }
  };

  return (
    <div
      className={classNames(classes.root, { [classes.rootFull]: isFullPost })}
    >
      {isEditable && (
        <div className={classNames(classes.editButtons, "buttons")}>
          <Link to={`/posts/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          className={classNames(classes.image, {
            [classes.imageFull]: isFullPost,
          })}
          src={
            !imageUrl.match("http")
              ? `${process.env.REACT_APP_API}api${imageUrl}`
              : imageUrl
          }
          alt={title}
        />
      )}
      <div className={classes.wrapper}>
        <UserInfo {...user} additionalText={createdAt} />
        <div className={classes.indention}>
          <h2
            className={classNames(classes.title, {
              [classes.titleFull]: isFullPost,
            })}
          >
            {isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}
          </h2>
          <ul className={classes.tags}>
            {tags &&
              tags.map((name: any) => (
                <li key={name}>
                  <Link to={`/tag/${name}`}>#{name}</Link>
                </li>
              ))}
          </ul>
          {children && <div className={classes.content}>{children}</div>}
          <ul className={classes.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
