import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SigninPage } from './signin.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SigninPageRoutingModule } from './signin-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SigninPageRoutingModule,
  ],
  declarations: [SigninPage],
})
export class SigninPageModule {}
