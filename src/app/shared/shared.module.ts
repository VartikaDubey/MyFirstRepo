import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AngularMaterialModule} from '../material/material.module';
import {LaunchDataService} from '.';

@NgModule({
  declarations: [  
    
  ],
  providers: [],
  imports: [
    CommonModule,
    NgbModule,
    AngularMaterialModule
  ],
  exports: [
    NgbModule,
    AngularMaterialModule  
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [LaunchDataService]
    };
  }
}
