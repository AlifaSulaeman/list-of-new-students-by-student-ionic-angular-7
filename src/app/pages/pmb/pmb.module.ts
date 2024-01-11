import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PmbPageRoutingModule } from './pmb-routing.module';

import { PmbPage } from './pmb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PmbPageRoutingModule
  ],
  declarations: [PmbPage]
})
export class PmbPageModule {}
