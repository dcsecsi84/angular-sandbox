import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {
  NotFoundComponent,
  NavigationComponent,
  ApiService,
  AuthService,
  AuthGuard
} from './shared.barrel';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NotFoundComponent,
    NavigationComponent
  ],
  declarations: [
    NotFoundComponent,
    NavigationComponent
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard
  ]
})
export class SharedModule { }
