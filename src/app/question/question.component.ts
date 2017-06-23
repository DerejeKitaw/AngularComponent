import { Component, OnInit, Input } from '@angular/core';
import { Question } from "app/models/model";

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
@Input() question: Question;
  constructor() { }

  ngOnInit() {
  }

}
