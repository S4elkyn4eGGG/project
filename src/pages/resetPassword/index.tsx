import React, { BaseSyntheticEvent, useState } from 'react';

import firebaseModule from 'api/firebase';

import Input from 'components/Input';
import Button from 'components/Button';
import ErrorLabel from 'components/ErrorLabel';
import Label from 'components/Label';

import './resetPassword.scss';
import { Link } from 'react-router-dom';

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

  return (
    <form className='project-login' onSubmit={onSubmit}>
      <div className={'project-panel'}>
        <div className='project-login_title reset-password_title'>
          Reset Password
        </div>
        <Input value={email} onChange={onChange} placeholder='Email' />
        {respError && <ErrorLabel text={respError} />}
        <Button
          text={'Reset'}
          submit={true}
          className={'reset-password_button'}
        />
        <Link className={'link'} to={'/login'}>
          <Label text={'Back to login'} />
        </Link>
        {isSuccess && <Label text={'Please, check you email'} />}
      </div>
    </form>
  );
};

export default ResetPassword;
