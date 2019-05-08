import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CountryComponent } from "./pages/country/country.component";
import { CountriesComponent } from "./pages/countries/countries.component";

const APP_ROUTES: Routes = [
  { path: '', component: CountriesComponent },
{ path: 'country/:id', component: CountryComponent },
{ path: '**', component: CountriesComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
