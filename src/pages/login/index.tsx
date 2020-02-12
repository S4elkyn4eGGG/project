import React, { SyntheticEvent, useEffect, useState } from 'react';

import { mainActions } from 'store/main/actions';
import { postsActions } from 'store/posts/actions';

import useForm from 'effects/useForm';
import { loginValidator } from 'validators/loginValidator';

import firebaseModule from 'api/firebase';

import Input from 'components/Input';
import Label from 'components/Label';
import ErrorLabel from 'components/ErrorLabel';
import Button from 'components/Button';

import './login.scss';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const Login = (props: any) => {
  const fromLocation: Location =
    props.location.state && props.location.state.from;

  useEffect(() => {
    postsActions.clearState();

    if (!fromLocation) {
      firebaseModule.logOut();
    }
  }, [fromLocation]);

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleInput,
    clearErrors,
  } = useForm(INITIAL_STATE, loginValidator);

  const [login, setLogin] = useState<boolean>(true);
  const [respErrors, setRespErrors] = useState<string>('');

  const isErrors = Boolean(Object.keys(errors).length);

  const loginRegisterFunc = async () => {
    mainActions.updateLoading(true);

    const { name, password, email } = values;

    try {
      login
        ? await firebaseModule.login(email, password)
        : await firebaseModule.register(name, email, password);

      mainActions.updateLoading(false);

      props.history.push(login && fromLocation ? fromLocation.pathname : '/');
    } catch (err) {
      setRespErrors(err.message);
      mainActions.updateLoading(false);
    }
  };

  const changeForm = (): void => {
    setLogin(!login);
    setRespErrors('');
    clearErrors();
  };

  const onSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    handleBlur();
    onSubmitClick();
  };

  const onSubmitClick = (): void => {
    handleSubmit(loginRegisterFunc);
  };

  return (
    <form className='login' onSubmit={onSubmit}>
      <div className={`login_form  login_form__${login ? 'auth' : 'register'}`}>
        <div className='login_form__title'>
          {login ? 'Authorization' : 'Registration'}
        </div>
        {!login && (
          <Input
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            onInput={handleInput}
            placeholder='Name'
            error={errors.name}
          />
        )}
        <Input
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          onInput={handleInput}
          placeholder='Email'
          error={errors.email}
        />
        <Input
          name='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          onInput={handleInput}
          placeholder='Password'
          error={errors.password}
          type='password'
        />
        <Button
          text={login ? 'Sign In' : 'Sign up'}
          onClick={onSubmitClick}
          disabled={isErrors}
          submit={true}
        />
        <ErrorLabel text={respErrors} />
        <Label
          text={login ? 'Create new account' : 'Back to Login'}
          onClick={changeForm}
        />
      </div>
    </form>
  );
};

export default Login;
