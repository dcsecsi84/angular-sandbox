import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Menu4Component } from './components/menu4/menu4.component';

const routes: Routes = [
  { path: '', component: Menu4Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu4RoutingModule { }
