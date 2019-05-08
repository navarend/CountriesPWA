import { Component, OnInit } from '@angular/core';
import { CountriesService } from "../../services/countries.service";
import { CountryInterface } from "../../interface/country";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: CountryInterface[]=[];

  constructor( public countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.GetCountries().then( result => this.countries = result);
  }
}
