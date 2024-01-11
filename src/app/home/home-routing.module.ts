import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'pmb',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/pmb/pmb.module').then( m => m.PmbPageModule)
          }
        ]
      },
      {
        path:'fee',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/fee/fee.module').then( m => m.FeePageModule)
          }
        ]
      },
      {
        path:'pendaftaran',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/pendaftaran/pendaftaran.module').then( m => m.PendaftaranPageModule)
          }
        ]
      },
      {
        path:'status',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/status/status.module').then( m => m.StatusPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
