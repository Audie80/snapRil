import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConnectionPage } from './connection.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConnectionPageRoutingModule } from './connection-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ConnectionPageRoutingModule,
  ],
  declarations: [ConnectionPage],
})
export class ConnectionPageModule {}
