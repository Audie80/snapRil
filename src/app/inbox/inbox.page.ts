import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-inbox',
  templateUrl: 'inbox.page.html',
  styleUrls: ['inbox.page.scss'],
})
export class InboxPage {
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
}
