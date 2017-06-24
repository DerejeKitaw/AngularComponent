import { Component, OnInit, Input } from '@angular/core';
import { Question } from "app/models/model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  // question component will get questions from hosting component
  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
