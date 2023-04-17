import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThesesPageComponent} from "src/app/theses-page/theses-page.component";
import {RouterModule, Routes} from "@angular/router";
import {SectionPageComponent} from "./section-page/section-page.component";
import {SubsectionPageComponent} from "./subsection-page/subsection-page.component";
import {ProloguePageComponent} from "./prologue-page/prologue-page.component";

const routes: Routes = [
  {
    path: 'uvod',
    component: ProloguePageComponent
  },
  {
    path: 'tezy',
    component: ThesesPageComponent
  },
  {
    path: 'kapitoly',
    component: SectionPageComponent
  },
  {
    path: 'podkapitoly',
    component: SubsectionPageComponent
  }
];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
