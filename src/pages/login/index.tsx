import React, { useState } from 'react';

import useForm from 'effects/useForm';
import { loginValidator } from 'validators/loginValidator';
import firebase from 'api/firebase';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const Login = (props: any) => {
  const fromLocation: Location =
    props.location.state && props.location.state.from;

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
    const { name, password, email } = values;

    login
      ? await firebase.login(email, password)
      : await firebase.register(name, email, password);

    if (login && fromLocation) {
      props.history.push(fromLocation.pathname);
    }
  };

  return (
    <div>
      {!login && (
        <input
          name={'name'}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={'Name'}
          autoComplete={'off'}
        />
      )}
      {!login && errors.name && <div>{errors.name}</div>}
      <input
        name={'email'}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={'Email'}
        autoComplete={'off'}
      />
      {errors.email && <div>{errors.email}</div>}
      <input
        name={'password'}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={'Password'}
        autoComplete={'off'}
      />
      {errors.password && <div>{errors.password}</div>}
      <button onClick={() => handleSubmit(loginRegisterFunc)}>
        {login ? 'Sign In' : 'Sign up'}
      </button>
      <button
        onClick={() => {
          setLogin(!login);
          clearErrors();
        }}
      >
        {login ? 'Create new account' : 'Back to Login'}
      </button>
    </div>
  );
};

export default Login;
