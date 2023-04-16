import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ThesesComponent} from "./theses/theses.component";
import {SectionComponent} from "./section/section.component";
import {SubsectionComponent} from "./subsection/subsection.component";

const routes: Routes = [
  {
    path: 'these',
    component: ThesesComponent
  },
  {
    path: 'section',
    component: SectionComponent
  },
  {
    path: 'subsection',
    component: SubsectionComponent
  },
/*  {
    path: '',
    redirectTo: 'these',
    pathMatch: 'full'
  }
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
