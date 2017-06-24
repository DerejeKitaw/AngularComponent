import { Component, OnInit, Input } from '@angular/core';
import { Choice } from "app/models/model";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  // choise component will
  // get information about choice , if selected and draw tipe
  @Input() choice :Choice;
  @Input() isSelected :Choice;
  @Input() drawType: string;
  
  constructor() { }

  ngOnInit() {
  }

}
