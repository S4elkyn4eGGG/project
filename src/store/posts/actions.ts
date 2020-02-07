import { updateState, _state, initialState } from './index';

import { IPostsActions } from './model';

export const postsActions: IPostsActions = {
  updateLoading: (isLoading: boolean) => {
    updateState({
      ..._state,
      isLoading,
    });
  },
  updatePosts: (posts: string[]) => {
    updateState({
      ..._state,
      posts,
    });
  },
  clearState: () => {
    updateState(initialState);
  },
};
