import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { ChoiceComponent } from './components/choice/choice.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
