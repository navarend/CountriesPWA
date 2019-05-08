import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CountriesService } from "../../services/countries.service";
import { CountryInterface } from "../../interface/country";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
 country: CountryInterface;
  constructor( public countryService: CountriesService, private activateRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.countryService.GetCountryById( id ).then( dataCountry => {
      if( !dataCountry ){
        return this.route.navigateByUrl('/');
      }
      this.country = dataCountry;
    })
  }

}
