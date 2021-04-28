import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { Message } from '../services/data.service';

@Component({
  selector: 'app-inbox',
  templateUrl: 'inbox.page.html',
  styleUrls: ['inbox.page.scss'],
})
export class InboxPage implements OnInit {
  public username: string;
  public srcImg: string;
  public inputMessage: string;
  public messages: Message[] = [];

  constructor() {}

  ngOnInit() {
    // get current logged in user details
    const user = firebase.auth().currentUser;

    // get the branch of the user
    const userBranch = firebase.database().ref('/users/' + user.uid);

    // retrieve the data from that branch - Remember this is an asynchronous function - it returns promise
    userBranch.once('value').then((snapShot) => {
      this.username = snapShot.val().username;
      this.srcImg = snapShot.val().photoUrl;
    });

    // Récupérer les messages
    this.getMessagesFromFirebase();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessagesFromFirebase() {
    // get the branch of the messages
    const messagesBranch = firebase.database().ref('/messages');

    messagesBranch.limitToLast(100).once('value', (snapshot) => {
      const tempMessages = [];
      snapshot.forEach((childSnapshot) => {
        tempMessages.push(childSnapshot.val());
      });
      this.messages = tempMessages;

      messagesBranch.limitToLast(0).on('child_added', (snapshotAdded) => {
        this.messages.push(snapshotAdded.val());
      });
    });
  }

  sendMessage() {
    // Créer un noeud dans realtime database correspondant au user
    firebase.database().ref('messages').push({
      fromName: this.username,
      photoUrl: this.srcImg,
      content: this.inputMessage,
      date: Date.now(),
    });

    this.inputMessage = '';
  }
}
