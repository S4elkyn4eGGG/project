import React, { BaseSyntheticEvent, useState } from 'react';

import firebaseModule from 'api/firebase';

import { Link } from 'react-router-dom';

import Input from 'components/Input';
import Button from 'components/Button';
import ErrorLabel from 'components/ErrorLabel';
import Label from 'components/Label';
import Panel from 'components/Panel';
import Title from 'components/Title';

import './resetPassword.scss';

const ResetPassword = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [respError, setRespError] = useState('');

  const onSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    try {
      await firebaseModule.resetPassword(email);
      setIsSuccess(true);
      setRespError('');
    } catch (err) {
      setRespError(err.message);
    }
  };
  const onChange = (event: BaseSyntheticEvent): void => {
    setEmail(event.target.value);
  };

  const onSubmitClick = (event: BaseSyntheticEvent): void => {
    onSubmit(event);
  };

  return (
    <form className='project-login' onSubmit={onSubmit}>
      <Panel>
        <Title text={'Reset Password'} className='reset-password_title' />
        <Input value={email} onChange={onChange} placeholder='Email' />
        {respError && <ErrorLabel text={respError} />}
        <Button
          text={'Reset'}
          submit={true}
          className={'reset-password_button'}
          onClick={onSubmitClick}
        />
        <Link className={'link'} to={'/login'}>
          <Label text={'Back to login'} />
        </Link>
        {isSuccess && <Label text={'Please, check your email'} />}
      </Panel>
    </form>
  );
};

export default ResetPassword;
