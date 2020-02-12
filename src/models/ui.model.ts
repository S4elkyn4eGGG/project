import { BaseSyntheticEvent, SyntheticEvent } from 'react';

export interface ILabelProps {
  text: string;
  onClick: (event: BaseSyntheticEvent) => void;
}

export interface IInputProps {
  name?: string;
  value?: any;
  placeholder?: string;
  error?: string;
  type?: string;
  onChange?: (event: BaseSyntheticEvent) => void;
  onBlur?: (event: BaseSyntheticEvent) => void;
  onInput?: (event: BaseSyntheticEvent) => void;
}

export interface IIconProps {
  children?: any;
  name: string;
}

export interface IErrorLabelProps {
  text: string | undefined | null;
}

export interface IButtonProps {
  text: string;
  onClick: (event: SyntheticEvent) => void;
  disabled?: boolean;
  submit?: boolean;
}
