import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { CarouselModule } from "ngx-bootstrap/carousel";
import { SummaryComponent } from './components/summary/summary.component';
import { TestComponent } from './test/test.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ChoiceComponent,
    SummaryComponent,
    TestComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
