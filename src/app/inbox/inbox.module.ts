import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { InboxPage } from './inbox.page';
import { InboxPageRoutingModule } from './inbox-routing.module';
import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    InboxPageRoutingModule,
  ],
  declarations: [InboxPage],
})
export class InboxPageModule {}
