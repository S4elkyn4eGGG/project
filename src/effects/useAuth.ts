import firebase from '../api/firebase';
import { useEffect, useState } from 'react';

export interface IAuth {
  userResponse: boolean;
  user: firebase.User | null;
}

const useAuth = () => {
  const [authUser, setAuthUser] = useState<IAuth>({
    userResponse: false,
    user: null,
  });

  useEffect(() => {
    const user$ = firebase.auth.onAuthStateChanged(
      (user: firebase.User | null) => {
        setAuthUser({
          userResponse: true,
          user,
        });
      }
    );

    return () => user$();
  }, []);

  return authUser;
};

export default useAuth;
