export interface IPostsState {
  posts: any[];
  editPost: any | null;
}

export interface IPostsActions {
  updatePosts: (posts: any[]) => void;
  updateEditPost: (editPost: any) => void;
  clearState: () => void;
}
