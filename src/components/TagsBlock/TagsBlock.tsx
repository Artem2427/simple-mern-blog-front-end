import React, { FC, useEffect } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

import SideBlock from "../SideBlock";
import { Link } from "react-router-dom";
import { fetchTags } from "../../store/posts/reducer";
import { useAppDispatch } from "../../utils/redux";

interface Props {
  items: string[];
  isLoading: boolean;
}

const TagsBlock: FC<Props> = ({ items, isLoading }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <SideBlock title="Тэги">
      <List>
        {(isLoading ? [...Array(5)] : items).map((name: string, i: number) => (
          <Link
            key={i}
            style={{ textDecoration: "none", color: "black" }}
            to={`/tags/${name}`}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <ListItemText primary={name} />
                )}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </SideBlock>
  );
};

export default TagsBlock;
