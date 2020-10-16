import { Component, OnInit } from '@angular/core';
import { fader } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [fader]
})
export class HomeComponent implements OnInit {
  public image_alt: string;
  public main_title: string;

  constructor() {
    this.main_title = 'Manitoba Risk Recognition Program'
    this.image_alt = "One-time payment to eligible essential front-line workers";
  }

  ngOnInit(): void {
  }

}
