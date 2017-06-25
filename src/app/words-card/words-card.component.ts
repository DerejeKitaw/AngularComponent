import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WORDS } from "app/data/words";

@Component({
  selector: 'app-words-card',
  templateUrl: './words-card.component.html',
  styleUrls: ['./words-card.component.scss']
})
export class WordsCardComponent implements OnInit {
  @Input() selected: number;
  @Input() question ;
  @Input() isSelected ;
  @Input() drawType: string;
   @Output() selectedChoice = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
onClicked(index) {
    this.selectedChoice.emit(index);
  }
}
