import { BaseSyntheticEvent, SyntheticEvent, useState } from 'react';
import { IUseFormModel } from 'models/useForm.model';

export default (
  initialState: { [key: string]: any },
  validate: (values: any) => any = (values: { [key: string]: any }) => {}
): IUseFormModel => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  function handleChange(event: BaseSyntheticEvent | any) {
    event.target && event.persist();

    setValues({
      ...values,
      [event.name || event.target.name]: event.value || event.target.value,
    });
  }

  function handleBlur() {
    const formErrors = validate(values);
    setErrors(formErrors);
  }

  function handleSubmit(submitFunc: any, event?: SyntheticEvent) {
    event && event.preventDefault();

    const formErrors = validate(values);

    Object.keys(formErrors).length ? setErrors(formErrors) : submitFunc(values);
  }

  function clearErrors() {
    setErrors({});
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    clearErrors,
  };
};
