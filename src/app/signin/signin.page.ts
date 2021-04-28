import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss'],
})
export class SigninPage {
  public inputUsername: string;
  public inputEmail: string;
  public inputPassword: string;
  public inputPhotoUrl: string;

  constructor(public router: Router) {}

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  async signin() {
    // Créer un user dans l'authent firebase
    const newUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(this.inputEmail, this.inputPassword);

    // get current logged in user details
    const user = firebase.auth().currentUser;

    // Créer un noeud dans realtime database correspondant au user
    firebase
      .database()
      .ref('users/' + user.uid)
      .set({
        username: this.inputUsername,
        email: this.inputEmail,
        photoUrl: this.inputPhotoUrl,
      });

    // Effacement des formulaires
    this.inputUsername = '';
    this.inputEmail = '';
    this.inputPassword = '';
    this.inputPhotoUrl = '';

    // Redirection
    this.router.navigate(['tabs/messages'], {
      fragment: 'inputMessage',
    });
  }
}
