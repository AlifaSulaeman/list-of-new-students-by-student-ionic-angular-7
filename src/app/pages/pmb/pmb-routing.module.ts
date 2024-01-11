import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PmbPage } from './pmb.page';

const routes: Routes = [
  {
    path: '',
    component: PmbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmbPageRoutingModule {}
