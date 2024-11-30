import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionsHTMLComponent } from './questions-html/questions-html.component';
import {QuestionsComponent} from './questions/questions.component';
import { QuestionsJSComponent } from './questions-js/questions-js.component';
import { QuestionsBootstrapComponent } from './questions-bootstrap/questions-bootstrap.component';
import { QuestionsAngularComponent } from './questions-angular/questions-angular.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { QuizInstructionsComponent } from './quiz-instructions/quiz-instructions.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { BootstrapNotesComponent } from './bootstrap-notes/bootstrap-notes.component';
import { HtmlNotesComponent } from './html-notes/html-notes.component';
import { CssNotesComponent } from './css-notes/css-notes.component';
import { JsNotesComponent } from './js-notes/js-notes.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"questions-html",component:QuestionsHTMLComponent},
  {path:"questions",component:QuestionsComponent},
  {path:"questions-js",component:QuestionsJSComponent},
  {path:"questions-bootstrap",component:QuestionsBootstrapComponent},
  {path:"questions-angular",component:QuestionsAngularComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"sign-in",component:SignInComponent},
  {path:"contact" , component:ContactComponent},
  {path:"quiz-start" , component:QuizStartComponent},
  {path:"quiz-instructions" , component:QuizInstructionsComponent},
  {path:"aboutus" , component:AboutusComponent},
  {path:"angular-notes", component:AngularNotesComponent},
  {path:"bootstrap-notes" , component:BootstrapNotesComponent},
  {path:"html-notes" , component:HtmlNotesComponent},
  {path:"css-notes" , component:CssNotesComponent},
  {path:"js-notes" , component:JsNotesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [QuestionsHTMLComponent,QuestionsComponent,QuestionsJSComponent,SignUpComponent,SignInComponent,ContactComponent,QuizInstructionsComponent,AboutusComponent,AngularNotesComponent,BootstrapNotesComponent,JsNotesComponent,HtmlNotesComponent,CssNotesComponent];