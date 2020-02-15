import React, { SyntheticEvent, useEffect, useState } from 'react';

import { mainActions } from 'store/main/actions';
import { postsActions } from 'store/posts/actions';

import useForm from 'hooks/useForm';
import { loginValidator } from 'validators/loginValidator';

import firebaseModule from 'api/firebase';

import Input from 'components/Input';
import Label from 'components/Label';
import ErrorLabel from 'components/ErrorLabel';
import Button from 'components/Button';
import Panel from 'components/Panel';
import Title from 'components/Title';

import './login.scss';
import { Link } from 'react-router-dom';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const Login = (props: any): JSX.Element => {
  const fromLocation: Location =
    props.location.state && props.location.state.from;

  useEffect(() => {
    postsActions.clearState();

    if (!fromLocation) {
      firebaseModule.logOut();
    }
  }, [fromLocation]);

  const [login, setLogin] = useState<boolean>(true);
  const [respErrors, setRespErrors] = useState<string>('');
  const [validFields, setValidFields] = useState(['email', 'password']);

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleInput,
    clearErrors,
  } = useForm(INITIAL_STATE, loginValidator(validFields));

  useEffect(() => {
    setRespErrors('');
  }, [values]);

  const isErrors = Boolean(Object.keys(errors).length);

  const loginRegisterFunc = async (): Promise<void> => {
    mainActions.updateLoading(true);

    const { name, password, email } = values;

    try {
      login
        ? await firebaseModule.login(email, password)
        : await firebaseModule.register(name, email, password);

      mainActions.updateLoading(false);

      props.history.push((login && fromLocation?.pathname) || '/');
    } catch (err) {
      setRespErrors(err.message);
      mainActions.updateLoading(false);
    }
  };

  const changeForm = (): void => {
    setValidFields(
      login ? ['name', 'email', 'password'] : ['email', 'password']
    );
    setLogin(!login);
    setRespErrors('');
    clearErrors();
  };

  const onSubmitClick = (): void => {
    handleSubmit(loginRegisterFunc);
  };

  const onSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    handleBlur();
    onSubmitClick();
  };

  return (
    <form className='project-login' onSubmit={onSubmit}>
      <Panel className={`login_panel login_${login ? 'auth' : 'register'}`}>
        <Title text={login ? 'Authorization' : 'Registration'} />
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
          text={login ? 'Sign In' : 'Sign Up'}
          onClick={onSubmitClick}
          disabled={isErrors}
          submit={true}
        />
        <ErrorLabel text={respErrors} />
        <Label
          text={login ? 'Create new account' : 'Back to Login'}
          onClick={changeForm}
        />
        <Link className={'link'} to={'/reset-password'}>
          <Label text={'Forgot your password ?'} onClick={changeForm} />
        </Link>
      </Panel>
    </form>
  );
};

export default Login;
