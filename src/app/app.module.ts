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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ThesesListComponent } from './theses-page/theses-list/theses-list.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { AuthHeaderInterceptor } from './authentication/interceptor/auth-header/auth-header.interceptor';
import { SectionListComponent } from './section-page/section-list/section-list.component';
import { SectionFormComponent } from './section-page/section-form/section-form.component';
import { SubsectionListComponent } from './subsection-page/subsection-list/subsection-list.component';
import { SubsectionFormComponent } from './subsection-page/subsection-form/subsection-form.component';
import {AuthGuard} from "./authentication/guard/auth.guard";
import { TestComponent } from './test/test.component';
import { TestListComponent } from './test/test-list/test-list.component';
import {TestFormComponent} from "./test/test-form/test-form.component";
import { TestQuestionComponent } from './test-question/test-question.component';
import { QuestionListComponent } from './test-question/question-list/question-list.component';
import { QuestionFormComponent } from './test-question/question-form/question-form.component';
import { SectionNewComponent } from './section-page/section-new/section-new.component';




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
    SubsectionFormComponent,
    TestComponent,
    TestListComponent,
    TestFormComponent,
    TestQuestionComponent,
    QuestionListComponent,
    QuestionFormComponent,
    SectionNewComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
