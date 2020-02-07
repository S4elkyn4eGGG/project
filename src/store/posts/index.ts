import { BehaviorSubject } from 'rxjs';
import { useEffect, useState } from 'react';

import { IPostsState } from './model';

export const initialState: IPostsState = {
  isLoading: false,
  posts: [],
};

export let _state: IPostsState = initialState;

const store$ = new BehaviorSubject<IPostsState>(_state);

export const updateState = (state: IPostsState) => {
  store$.next((_state = state));
};

export default () => {
  const [state, setState] = useState(_state);

  useEffect(() => {
    const sub = store$.subscribe(setState);
    return () => sub.unsubscribe();
  }, []);

  return state;
};
