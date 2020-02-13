import app from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './config';

class Firebase {
  public auth: app.auth.Auth;

  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  public async register(
    name: string,
    email: string,
    password: string
  ): Promise<void> {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    await newUser.user?.updateProfile({
      displayName: name,
    });
  }

  public async login(
    email: string,
    password: string
  ): Promise<app.auth.UserCredential> {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  public async logOut(): Promise<void> {
    await this.auth.signOut();
  }

  public async resetPassword(email: string): Promise<void> {
    await this.auth.sendPasswordResetEmail(email);
  }
}

const firebaseModule = new Firebase();

export default firebaseModule;
