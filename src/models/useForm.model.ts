import { BaseSyntheticEvent, SyntheticEvent } from 'react';

export interface IUseFormModel {
  values: { [key: string]: any };
  errors: { [key: string]: any };
  handleChange: (event: BaseSyntheticEvent) => void;
  handleBlur: () => void;
  handleSubmit: (func: any, event?: SyntheticEvent) => void;
  clearErrors: () => void;
}
