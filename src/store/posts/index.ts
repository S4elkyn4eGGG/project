import { BehaviorSubject } from 'rxjs';
import { useEffect, useState } from 'react';

import { IPostsState } from './model';

export const initialState: IPostsState = {
  posts: [],
  editPost: null,
};

export let _state: IPostsState = initialState;

const store$ = new BehaviorSubject<IPostsState>(_state);

export const updateState = (state: IPostsState): void => {
  store$.next((_state = state));
};

export default (): IPostsState => {
  const [state, setState] = useState(_state);

  useEffect(() => {
    const sub = store$.subscribe(setState);
    return (): void => sub.unsubscribe();
  }, []);

  return state;
};
