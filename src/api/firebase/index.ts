import app from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './config';

class Firebase {
  public auth: firebase.auth.Auth;

  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  public async register(name: string, email: string, password: string) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    // @ts-ignore
    return await newUser.user.updateProfile({
      displayName: name,
    });
  }

  public async login(email: string, password: string) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  public logOut(): void {
    this.auth.signOut();
  }
}

const firebase = new Firebase();

export default firebase;
