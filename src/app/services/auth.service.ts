import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$:Observable<any>;
  
  constructor(private afAuth:AngularFireAuth,
                private afs:AngularFirestore,
                  private router:Router) { 
    /*
      Pipe te permite encadenar operaciones con observables
    */
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    this.afAuth.auth.signOut();
    this.router.navigate['/'];
  }

  private updateUserData(user) {
    const userRef = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      photoUrl:user.photoURL
    }
    return userRef.set(data, {merge:true});
  }
}
