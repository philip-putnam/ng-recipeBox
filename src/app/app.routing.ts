import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new-recipe',
    component: NewRecipeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// import { NewRecipeComponent } from "./new-recipe/new-recipe.component";
// import { HomeComponent } from "./home/home.component";
// import { provideRouter } from "@angular/router";
//
// export const APP_ROUTES = [
//   { path: 'new-recipe', component: NewRecipeComponent },
//   { path: '', component: HomeComponent }
// ];
//
// export const APP_ROUTES_PROVIDER = [
//   provideRouter(APP_ROUTES),
// ];
