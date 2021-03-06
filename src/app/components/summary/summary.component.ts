import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() summary: string;
  @Output() resetQuiz = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.resetQuiz.emit(true);
  }

}
