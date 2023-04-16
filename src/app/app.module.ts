import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {ThesesComponent} from "./theses/theses.component";
import {PrologueComponent} from "./prologue/prologue.component";
import {SectionComponent} from "./section/section.component";
import {SubsectionComponent} from "./subsection/subsection.component";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ThesesComponent,
    PrologueComponent,
    SectionComponent,
    SubsectionComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
