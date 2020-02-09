import { ILoginModel } from 'models/login.model';

export const loginValidator = (values: ILoginModel): Partial<ILoginModel> => {
  let errors: Partial<ILoginModel> = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (
    !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
      values.email
    )
  ) {
    errors.email = 'Email is incorrect';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password can not be less than 6 characters';
  }

  return Object.keys(errors).length ? errors : {};
};
