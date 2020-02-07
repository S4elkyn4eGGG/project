export interface IPostsState {
  isLoading: boolean;
  posts: string[];
}

export interface IPostsActions {
  updateLoading: (isLoading: boolean) => void;
  updatePosts: (posts: string[]) => void;
  clearState: () => void;
}
