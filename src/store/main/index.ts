import { BehaviorSubject } from 'rxjs';
import { useEffect, useState } from 'react';

import { IMainState } from './model';

export const initialState: IMainState = {
  isLoading: false,
};

export let _state: IMainState = initialState;

const store$ = new BehaviorSubject<IMainState>(_state);

export const updateState = (state: IMainState) => {
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
