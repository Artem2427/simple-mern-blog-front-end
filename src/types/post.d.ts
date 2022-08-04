declare interface PostServices {
  fetchAllPosts: () => Promise<IPost[]>;
  fetchOnePost: (id: string) => Promise<IPost>;
  fetchLastTags: () => Promise<string[]>;
  uploadPostImage: (formData: FormData) => Promise<{ url: string }>;
  addNewPost: (data: IPostData) => Promise<IPost>;
  deleteOnePost: (id: string) => void;
  updateOnePost: (id: string, data: IPostData) => void;
}

declare interface IPost {
  createdAt: string;
  tags: string[];
  text: string;
  title: string;
  updatedAt: string;
  viewsCount: number;
  imageUrl: string;
  user: IUser;
  _id: string;
}

declare interface IPostData {
  title: string;
  text: string;
  tags?: string[];
  imageUrl?: string;
}
