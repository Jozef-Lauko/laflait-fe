import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';
import { ThesesPageComponent } from 'src/app/theses-page/theses-page.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './main-page/header/header.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { BodyComponent } from './main-page/body/body.component';
import { PageComponent } from './main-page/page/page.component';
import { SectionPageComponent } from './section-page/section-page.component';
import { SubsectionPageComponent } from './subsection-page/subsection-page.component';
import { ProloguePageComponent } from './prologue-page/prologue-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThesesPageComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PageComponent,
    SectionPageComponent,
    SubsectionPageComponent,
    ProloguePageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
