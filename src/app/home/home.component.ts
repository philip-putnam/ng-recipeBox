import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() recipes;

  constructor() { }

  ngOnInit() {
    console.log(AppComponent);
  }

}
