import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Menu5Component } from './components/menu5/menu5.component';

const routes: Routes = [
  { path: '', component: Menu5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu5RoutingModule { }
