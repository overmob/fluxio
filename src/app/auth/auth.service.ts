import { Injectable } from '@angular/core';
import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = this.getAuthInstance();
  private userSubject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable();

  private getAuthInstance() {
    if (!getApps().length) {
      initializeApp(environment.firebase);
    }
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.userSubject.next(user);
    });
    return auth;
  }

  signInWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  signOut() {
    return signOut(this.auth);
  }
}
