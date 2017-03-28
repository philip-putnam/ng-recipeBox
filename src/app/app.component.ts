import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: [HomeComponent]
})
export class AppComponent {
  recipes: Recipes[];
  title = 'app works';
}
