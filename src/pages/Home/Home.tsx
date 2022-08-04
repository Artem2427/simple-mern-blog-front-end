import React, { useEffect, useCallback } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

import Post from "../../components/Post";
import TagsBlock from "../../components/TagsBlock/TagsBlock";
import CommentsBlock from "../../components/CommentsBlock";

import { useAppDispatch, useAppSelector } from "../../utils/redux";
import { fetchPosts } from "../../store/posts/reducer";

const Home = () => {
  const dispatch = useAppDispatch();
  const { posts, tags } = useAppSelector((state) => state.postsReducer);

  const { user } = useAppSelector((state) => state.authReducer);

  const getData = useCallback(async () => {
    try {
      dispatch(fetchPosts());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const isEditable = (userItem: IUser) =>
    user ? user._id === userItem._id : false;

  useEffect(() => {
    getData();
  }, [dispatch, getData]);

  return (
    <>
      <Tabs
        style={{ marginBottom: 15 }}
        value={0}
        aria-label="basic tabs example"
      >
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(posts.loading ? [...Array(5)] : posts.items).map(
            (item: IPost, index: number) => {
              return posts.loading ? (
                <Post
                  key={index}
                  isLoading={posts.loading}
                  isFullPost={false}
                  isEditable={false}
                />
              ) : (
                <Post
                  key={index}
                  _id={item._id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  user={{
                    avatarUrl: item.user.avatarUrl,
                    fullName: item.user.fullName,
                  }}
                  createdAt={"12 июня 2022 г."}
                  viewsCount={item.viewsCount}
                  commentsCount={0}
                  tags={item.tags}
                  isFullPost={false}
                  isLoading={posts.loading}
                  isEditable={isEditable(item.user)}
                />
              );
            }
          )}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={tags.loading} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Вася Пупкин",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Текст текст",
              },
              {
                user: {
                  fullName: "Иван Иванов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
