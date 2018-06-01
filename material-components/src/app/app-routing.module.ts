import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'menu1', loadChildren: 'app/menu1/menu1.module#Menu1Module' },
    { path: 'menu2', loadChildren: 'app/menu2/menu2.module#Menu2Module' },
    { path: 'menu3', loadChildren: 'app/menu3/menu3.module#Menu3Module' },
    { path: 'menu4', loadChildren: 'app/menu4/menu4.module#Menu4Module' },
    { path: 'menu5', loadChildren: 'app/menu5/menu5.module#Menu5Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
