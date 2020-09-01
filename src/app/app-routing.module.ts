import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'launchlist',    
    loadChildren: './modules/launchPage/launchPage.module#LaunchListModule'    
  },
  {
    path: '',
    redirectTo: '/launchlist?limit=100',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
