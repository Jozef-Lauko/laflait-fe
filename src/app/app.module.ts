import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';
import { ThesesPageComponent } from 'src/app/theses-page/theses-page.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './main-page/header/header.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { BodyComponent } from './main-page/body/body.component';
import { PageComponent } from './main-page/page/page.component';
import { SectionPageComponent } from './section-page/section-page.component';
import { SubsectionPageComponent } from './subsection-page/subsection-page.component';
import { ThesesFormComponent } from './theses-page/theses-form/theses-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ThesesListComponent } from './theses-page/theses-list/theses-list.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { AuthHeaderInterceptor } from './authentication/interceptor/auth-header/auth-header.interceptor';
import { SectionListComponent } from './section-page/section-list/section-list.component';
import { SectionFormComponent } from './section-page/section-form/section-form.component';
import { SubsectionListComponent } from './subsection-page/subsection-list/subsection-list.component';
import { SubsectionFormComponent } from './subsection-page/subsection-form/subsection-form.component';



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
    ThesesFormComponent,
    ThesesListComponent,
    LoginPageComponent,
    SectionListComponent,
    SectionFormComponent,
    SubsectionListComponent,
    SubsectionFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
