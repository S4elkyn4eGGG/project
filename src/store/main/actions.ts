import { updateState, _state } from './index';

import { IPostsActions } from './model';

export const mainActions: IPostsActions = {
  updateLoading: (isLoading: boolean) => {
    updateState({
      ..._state,
      isLoading,
    });
  },
  updateUser: (userName: string | null) => {
    updateState({
      ..._state,
      userName,
    });
  },
};
