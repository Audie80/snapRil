import { Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(public router: Router) {}

  signout() {
    // Déconnexion
    firebase.auth().signOut();

    // Redirection
    this.router.navigate(['tabs/connection']);
  }
}
