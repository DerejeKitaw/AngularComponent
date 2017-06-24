import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from "app/models/model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  // question component will get questions from hosting component
  // and emit index of selected item
  @Input() question: Question;
  @Input() selected: number;
  @Output() selectedChoice = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
// when component selected pass the index
onClicked(index) {
    this.selectedChoice.emit(index);
  }
}
