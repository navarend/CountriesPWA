import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CountryInterface } from "../interface/Country";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countries: CountryInterface[] = [];
  constructor( private http: HttpClient) { }

  public GetCountries(): Promise<CountryInterface[]> {
    if( this.countries.length > 0 ){
      return Promise.resolve( this.countries );
    }

    return new Promise( resolve => {
      this.http.get('https://restcountries.eu/rest/v2/region/Americas').subscribe( (countries: CountryInterface[]) => {
          console.log(countries);
          this.countries = countries;
          resolve( countries );
      });
    });
  }

  GetCountryById( id: string ){
    if( this.countries.length > 0 ){
      const country = this.countries.find( country => country.alpha3Code === id );
      return Promise.resolve( country );
    }

    return this.GetCountries().then( country => {
      const countries = this.countries.find( country => country.alpha3Code === id );
      return Promise.resolve( countries );
    })
  }
}
