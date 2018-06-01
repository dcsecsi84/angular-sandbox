import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu5RoutingModule } from './menu5-routing.module';
import { Menu5Component } from './components/menu5/menu5.component';

@NgModule({
  imports: [
    CommonModule,
    Menu5RoutingModule
  ],
  declarations: [Menu5Component]
})
export class Menu5Module { }
