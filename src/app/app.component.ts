import { Component, OnInit} from '@angular/core';
import { HelpfulValuesService } from './helpful-values.service'; //KONTROLA WALKI I MAPY

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TheJourney';

  noBatlle!: boolean;

  constructor(
    private values : HelpfulValuesService
  ) { }

  ngOnInit(): void {
    this.values.currentValue.subscribe(nu => this.noBatlle = nu);
  }

}
