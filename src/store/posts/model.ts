export interface IPostsState {
  posts: string[];
}

export interface IPostsActions {
  updatePosts: (posts: string[]) => void;
  clearState: () => void;
}
