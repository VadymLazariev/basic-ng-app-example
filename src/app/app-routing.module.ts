import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';

const routes: Routes = [
  {
    path: '', component: Comp1Component
  },
  {
    path: 'comp2', loadChildren: './module2/module2.module#Module2Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
