import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu1RoutingModule } from './menu1-routing.module';
import { Menu1Component } from './components/menu1/menu1.component';

import { MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Menu1RoutingModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [Menu1Component]
})
export class Menu1Module { }
