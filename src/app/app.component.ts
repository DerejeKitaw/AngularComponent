import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DUMMY_DATA } from "app/data/dummy-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions = DUMMY_DATA;
}
