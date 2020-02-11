import { updateState, _state, initialState } from './index';

import { IPostsActions } from './model';

export const postsActions: IPostsActions = {
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
