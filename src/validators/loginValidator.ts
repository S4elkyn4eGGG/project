import { ILoginModel } from 'models/login.model';

export const loginValidator = (fields: string[]) => (
  values: ILoginModel
): Partial<ILoginModel> => {
  const errors: Partial<ILoginModel> = {};

  const { name, email, password } = values;
  const valid: { [key: string]: () => void } = {
    name: (): void => {
      if (!name) {
        errors.name = 'Name is required';
      }
    },
    email: (): void => {
      const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

      if (!email) {
        errors.email = 'Email is required';
      } else if (!regExp.test(email)) {
        errors.email = 'Email is incorrect';
      }
    },
    password: (): void => {
      if (!password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password can not be less than 6 characters';
      }
    },
  };

  fields.forEach((field: string) => {
    valid[field] && valid[field]();
  });

  return errors;
};
