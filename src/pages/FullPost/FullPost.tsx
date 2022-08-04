import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Index from "../../components/AddComment";
import CommentsBlock from "../../components/CommentsBlock";
import Post from "../../components/Post";
import PostSkeleton from "../../components/Post/Skeleton";
import postServices from "../../services/postsServices";

const FullPost = () => {
  const { id } = useParams();
  const [data, setData] = useState<IPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchOnePost = useCallback(async () => {
    try {
      if (id) {
        const res = await postServices.fetchOnePost(id);
        setData(res);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchOnePost();
  }, [fetchOnePost]);

  if (isLoading) {
    return <Post isFullPost={true} isLoading={isLoading} isEditable={true} />;
  }

  return (
    <>
      {isLoading && !data ? (
        <PostSkeleton />
      ) : (
        data && (
          <Post
            _id={data._id}
            title={data.title}
            imageUrl={
              data.imageUrl && !data.imageUrl.match("http")
                ? `${process.env.REACT_APP_API}${data.imageUrl}`
                : data.imageUrl
            }
            user={{
              avatarUrl: data.user.avatarUrl,
              fullName: data.user.fullName,
            }}
            createdAt={data.createdAt}
            viewsCount={data.viewsCount}
            commentsCount={0}
            tags={data.tags}
            isFullPost
            isLoading={false}
            isEditable={true}
          >
            <ReactMarkdown children={data.text} />
          </Post>
        )
      )}

      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий 555555",
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
      >
        <Index />
      </CommentsBlock>
    </>
  );
};

export default FullPost;
