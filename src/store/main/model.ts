export interface IMainState {
  isLoading: boolean;
  userName: string | null;
}

export interface IPostsActions {
  updateLoading: (isLoading: boolean) => void;
  updateUser: (userName: string | null) => void;
}
