import { BaseSyntheticEvent, SyntheticEvent, useState } from 'react';
import { IHUseFormModel } from 'models/hooks.model';

export default (
  initialState: { [key: string]: any },
  validate: (values: any) => any = (): any => ({})
): IHUseFormModel => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  function handleChange(event: BaseSyntheticEvent | any): void {
    event.target && event.persist();

    setValues({
      ...values,
      [event.name || event.target.name]: event.value || event.target?.value,
    });
  }

  function handleBlur(): void {
    const formErrors = validate(values);
    setErrors(formErrors);
  }

  function handleInput(): void {
    debugger;
    const formErrors = validate(values);

    if (!Object.keys(formErrors).length) {
      setErrors(formErrors);
    }
  }

  function handleSubmit(submitFunc: any, event?: SyntheticEvent): void {
    event?.preventDefault();

    const formErrors = validate(values);

    Object.keys(formErrors).length ? setErrors(formErrors) : submitFunc(values);
  }

  function clearErrors(): void {
    setErrors({});
  }

  function updateValues(values: any): void {
    setValues(values);
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    clearErrors,
    handleInput,
    updateValues,
  };
};
