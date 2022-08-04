declare interface PostInitialState {
  posts: PostWithLoading;
  tags: TagsWithLoading;
}

declare interface PostWithLoading {
  loading: boolean;
  items: IPost[];
}

declare interface TagsWithLoading {
  loading: boolean;
  items: string[];
}
