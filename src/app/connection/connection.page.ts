import { Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-connection',
  templateUrl: 'connection.page.html',
  styleUrls: ['connection.page.scss'],
})
export class ConnectionPage {
  public inputEmail: string;
  public inputPassword: string;

  constructor(public router: Router) {}

  async connection() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.inputEmail, this.inputPassword)
      .then((res) => {
        if (firebase.auth().currentUser !== null) {
          this.router.navigate(['/tabs/messages'], {
            fragment: 'inputMessage',
          });
        } else {
          document.getElementById('errorConnection').style.display = 'block';
          //window.alert('Email is not verified');
          return false;
        }
      })
      .catch((error) => {
        document.getElementById('errorConnection').style.display = 'block';
        //window.alert(error.message);
      });

    this.inputEmail = '';
    this.inputPassword = '';
  }
}
