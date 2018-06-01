import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu2RoutingModule } from './menu2-routing.module';
import { Menu2Component } from './components/menu2/menu2.component';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Menu2RoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [Menu2Component]
})
export class Menu2Module { }
