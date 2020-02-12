import { BaseSyntheticEvent, SyntheticEvent } from 'react';
import firebase from '../api/firebase';

export interface IHUseFormModel {
  values: { [key: string]: any };
  errors: { [key: string]: any };
  handleChange: (event: BaseSyntheticEvent) => void;
  handleBlur: () => void;
  handleSubmit: (func: any, event?: SyntheticEvent) => void;
  clearErrors: () => void;
}

export interface IHAuth {
  userResponse: boolean;
  user: firebase.User | null;
}
