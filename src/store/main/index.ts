import { BehaviorSubject } from 'rxjs';
import { useEffect, useState } from 'react';

import { IMainState } from './model';

export const initialState: IMainState = {
  isLoading: false,
  userName: null,
};

export let _state: IMainState = initialState;

const store$ = new BehaviorSubject<IMainState>(_state);

export const updateState = (state: IMainState): void => {
  store$.next((_state = state));
};

export default (): IMainState => {
  const [state, setState] = useState(_state);

  useEffect(() => {
    const sub = store$.subscribe(setState);
    return (): void => sub.unsubscribe();
  }, []);

  return state;
};
