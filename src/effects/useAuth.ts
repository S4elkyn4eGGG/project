import firebase from 'api/firebase';
import { useEffect, useState } from 'react';

import { IHAuth } from 'models/hooks.model';

const useAuth = (): IHAuth => {
  const [authUser, setAuthUser] = useState<IHAuth>({
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

    return (): void => user$();
  }, []);

  return authUser;
};

export default useAuth;
