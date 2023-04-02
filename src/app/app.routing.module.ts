import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ThesesComponent} from "./theses/theses.component";

const routes: Routes = [
  {
    path: 'these',
    component: ThesesComponent
  },
  {
    path: '',
    redirectTo: 'these',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
