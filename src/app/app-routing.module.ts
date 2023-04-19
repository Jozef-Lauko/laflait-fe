import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThesesPageComponent} from "src/app/theses-page/theses-page.component";
import {RouterModule, Routes} from "@angular/router";
import {SectionPageComponent} from "./section-page/section-page.component";
import {SubsectionPageComponent} from "./subsection-page/subsection-page.component";
import {LoginPageComponent} from "./authentication/login-page/login-page.component";
import {AuthGuard} from "./authentication/guard/auth.guard";

const routes: Routes = [
  {
    path: 'tezy',
//    canActivate: [AuthGuard],
    component: ThesesPageComponent
  },
  {
    path: 'kapitoly',
    component: SectionPageComponent
  },
  {
    path:'podkapitoly',
    component: SubsectionPageComponent
  },
  {
    path:'login',
    component: LoginPageComponent
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
