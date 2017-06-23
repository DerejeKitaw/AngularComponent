import { Component } from '@angular/core';
import { DUMMY_DATA } from "../../api/data/dummy-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  questions = DUMMY_DATA;
  
}
