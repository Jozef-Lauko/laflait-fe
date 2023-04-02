import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLink} from "@angular/router";
import {ThesesComponent} from "./theses/theses.component";

@NgModule({
  declarations: [
    AppComponent,
    ThesesComponent,
  ],
  imports: [
    BrowserModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
