import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Choice } from "app/models/model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() isSelected ;
  @Output() selectedChoice = new EventEmitter();
  choice :Choice = 
      {
        'imageUrl': '/assets/images/bear.png',
        'title': 'Bee',
        'summary': 'You like sweetness in life.'
      }
  constructor() { }

  ngOnInit() {
  }
// when component selected pass the index
onClicked(index) {
    this.selectedChoice.emit(index);
  }
}
