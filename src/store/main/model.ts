export interface IMainState {
  isLoading: boolean;
}

export interface IPostsActions {
  updateLoading: (isLoading: boolean) => void;
}
