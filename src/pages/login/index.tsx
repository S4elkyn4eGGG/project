import React, { useEffect, useState } from 'react';

import useForm from 'effects/useForm';
import { loginValidator } from 'validators/loginValidator';
import { mainActions } from 'store/main/actions';
import firebase from 'api/firebase';
import { postsActions } from '../../store/posts/actions';

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
      firebase.logOut();
    }
  }, [fromLocation]);

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    clearErrors,
  } = useForm(INITIAL_STATE, loginValidator);

  const [login, setLogin] = useState(true);

  const loginRegisterFunc = async () => {
    mainActions.updateLoading(true);

    const { name, password, email } = values;

    login
      ? await firebase.login(email, password)
      : await firebase.register(name, email, password);

    mainActions.updateLoading(false);

    if (login && fromLocation) {
      props.history.push(fromLocation.pathname);
    } else {
      props.history.push('/');
    }
  };

  return (
    <div className='login'>
      <div className={`login_form  login_form__${login ? 'auth' : 'registr'}`}>
        <div className='login_form__title'>
          {login ? 'Authorization' : 'Registration'}
        </div>
        {!login && (
          <input
            className='login_form__input'
            name={'name'}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={'Name'}
            autoComplete={'off'}
          />
        )}
        {!login && errors.name && (
          <div className='login_form__error'>{errors.name}</div>
        )}
        <input
          className='login_form__input'
          name={'email'}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={'Email'}
          autoComplete={'off'}
        />
        {errors.email && (
          <div className='login_form__error'>{errors.email}</div>
        )}
        <input
          className='login_form__input'
          name={'password'}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={'Password'}
          autoComplete={'off'}
          type='password'
        />
        {errors.password && (
          <div className='login_form__error'>{errors.password}</div>
        )}
        <div
          className='login_form__button'
          onClick={(): void => handleSubmit(loginRegisterFunc)}
        >
          {login ? 'Sign In' : 'Sign up'}
        </div>
        <div
          className='login_form__label'
          onClick={() => {
            setLogin(!login);
            clearErrors();
          }}
        >
          {login ? 'Create new account' : 'Back to Login'}
        </div>
      </div>
    </div>
  );
};

export default Login;
