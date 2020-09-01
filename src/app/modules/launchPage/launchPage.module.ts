import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from 'src/app/shared/shared.module';
import { LaunchListComponent } from 'src/app/modules/launchPage/launchList/launchlist.component';
import {AddSelectedClassDirective} from 'src/app/modules/launchPage/directives/addSelectedClass.directive';
import {FilterListComponent, MissionResultComponent} from 'src/app/modules/launchPage/launchListComponents';
import { Routes, RouterModule } from '@angular/router';

// Routing
const routes: Routes = [
    {
      path: '',
      component: LaunchListComponent
    }
];

@NgModule({
  declarations: [AddSelectedClassDirective, LaunchListComponent, FilterListComponent, MissionResultComponent],
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
