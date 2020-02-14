export interface IPostsState {
  posts: any[];
}

export interface IPostsActions {
  updatePosts: (posts: any[]) => void;
  clearState: () => void;
}
