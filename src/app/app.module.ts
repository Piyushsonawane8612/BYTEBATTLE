import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { QuestionsHTMLComponent } from './questions-html/questions-html.component';
import {QuestionsComponent} from './questions/questions.component';
import {QuestionsJSComponent } from './questions-js/questions-js.component';
import { QuestionsBootstrapComponent } from './questions-bootstrap/questions-bootstrap.component';
import { QuestionsAngularComponent } from './questions-angular/questions-angular.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { QuizInstructionsComponent } from './quiz-instructions/quiz-instructions.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { BootstrapNotesComponent } from './bootstrap-notes/bootstrap-notes.component';
import { HtmlNotesComponent } from './html-notes/html-notes.component';
import { CssNotesComponent } from './css-notes/css-notes.component';
import { JsNotesComponent } from './js-notes/js-notes.component';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HomeComponent,
    QuestionsHTMLComponent,
    QuestionsComponent,
    QuestionsJSComponent,
    QuestionsBootstrapComponent,
    QuestionsAngularComponent,
    SignUpComponent,
    SignInComponent,
    ContactComponent,
    QuizInstructionsComponent,
    QuizStartComponent,
    AboutusComponent,
    AngularNotesComponent,
    BootstrapNotesComponent,
    HtmlNotesComponent,
    CssNotesComponent,
    JsNotesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
