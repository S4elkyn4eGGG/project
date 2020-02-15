import { updateState, _state, initialState } from './index';

import { IPostsActions } from './model';

export const postsActions: IPostsActions = {
  updatePosts: (posts: any[]) => {
    updateState({
      ..._state,
      posts,
    });
  },
  updateEditPost: (editPost: any) => {
    updateState({
      ..._state,
      editPost,
    });
  },
  clearState: () => {
    updateState(initialState);
  },
};
