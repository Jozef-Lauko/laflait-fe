import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ThesesComponent} from "./theses/theses.component";
import {PrologueComponent} from "./prologue/prologue.component";

const routes: Routes = [
  {
    path: 'prologue',
    component: PrologueComponent
  },
  {
    path: 'these',
    component: ThesesComponent
  },
  {
    path: '',
    redirectTo: 'prologue',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
