import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  TaskRoutingModule,
  TaskListComponent,
  TaskListItemComponent,
  TaskService,
  AgePipe
} from './task.barrel';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    TaskListComponent,
    TaskListItemComponent,
    AgePipe
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
