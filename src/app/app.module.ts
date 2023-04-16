import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ThesesComponent} from "./theses/theses.component";
import {SectionComponent} from "./section/section.component";
import {SubsectionComponent} from "./subsection/subsection.component";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import { HeaderComponent } from './main-page/header/header.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { BodyComponent } from './main-page/body/body.component';
import { PageComponent } from './main-page/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThesesComponent,
    SectionComponent,
    SubsectionComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    RouterLinkActive,
    RouterTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
