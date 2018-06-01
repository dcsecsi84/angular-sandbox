import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu3RoutingModule } from './menu3-routing.module';
import { Menu3Component } from './components/menu3/menu3.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Menu3RoutingModule,
    CdkTableModule,
    MatTableModule,
  ],
  declarations: [Menu3Component]
})
export class Menu3Module { }
