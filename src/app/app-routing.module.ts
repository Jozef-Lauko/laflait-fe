import { NgModule } from '@angular/core';
import {ThesesPageComponent} from "src/app/theses-page/theses-page.component";
import {RouterModule, Routes} from "@angular/router";
import {SectionPageComponent} from "./section-page/section-page.component";
import {SubsectionPageComponent} from "./subsection-page/subsection-page.component";
import {LoginPageComponent} from "./authentication/login-page/login-page.component";
import {ProloguePageComponent} from "./prologue-page/prologue-page.component";
import {AuthGuard} from "./authentication/guard/auth.guard";
import {TestComponent} from "./test/test.component";
import {TestQuestionComponent} from "./test-question/test-question.component";



const routes: Routes = [
  {
    path: '',
    component: ProloguePageComponent
  },
  {
    path: 'tezy',
    component: ThesesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'kapitoly/:id',
    component: SectionPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'podkapitoly/:id',
    component: SubsectionPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'otazky/:id',
    component: TestQuestionComponent,
    canActivate: [AuthGuard]
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
