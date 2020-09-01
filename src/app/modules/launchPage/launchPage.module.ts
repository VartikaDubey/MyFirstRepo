import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from 'src/app/shared/shared.module';
import { LaunchListComponent } from './launchlist/launchlist.component';
import {AddSelectedClassDirective} from './directives/addSelectedClass.directive';
import * as Barrel from './launchListComponents/index';
import { Routes, RouterModule } from '@angular/router';

// Routing
const routes: Routes = [
    {
      path: '',
      component: LaunchListComponent
    }
];

@NgModule({
  declarations: [AddSelectedClassDirective, LaunchListComponent, Barrel.FilterListComponent, Barrel.MissionResultComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [

  ]
})
export class LaunchListModule { }
