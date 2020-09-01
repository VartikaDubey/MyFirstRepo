import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'

const MaterialComponents = [
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule
];

@NgModule({
    imports: [
        MaterialComponents
    ],
    exports: [
        MaterialComponents
    ]

})
export class AngularMaterialModule { }
