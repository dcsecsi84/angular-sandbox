import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu4RoutingModule } from './menu4-routing.module';
import { Menu4Component } from './components/menu4/menu4.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Menu4RoutingModule,
    MatButtonModule
  ],
  declarations: [Menu4Component]
})
export class Menu4Module { }
