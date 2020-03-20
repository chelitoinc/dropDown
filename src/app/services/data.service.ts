import { Injectable } from '@angular/core';
import { CountryI, CityI} from '../models/model.interface';

@Injectable()
export class DataService {
  private countries: CountryI[] = [
    {
      id:1,
      name: 'México'
    },
    {
      id:2,
      name: 'Colombia'
    },
    {
      id:3,
      name: 'Brazil'
    },
    {
      id:4,
      name: 'Estados Unidos'
    },
    {
      id:5,
      name: 'España'
    }
  ];
  private cities: CityI[] = [
    {
      id: 1,
      countryId: 1,
      name: 'Morelos'
    },
    {
      id: 2,
      countryId: 1,
      name: 'Guerrero'
    },
    {
      id: 3,
      countryId: 1,
      name: 'Ciudad de México'
    },
    {
      id: 4,
      countryId: 2,
      name: 'Cali'
    },
    {
      id: 5,
      countryId: 2,
      name: 'Medellin'
    },
    {
      id: 6,
      countryId: 3,
      name: 'Sau Pablo'
    },
    {
      id: 7,
      countryId: 3,
      name: 'Brazilia'
    },
    {
      id: 8,
      countryId: 4,
      name: 'Los Angeles'
    },
    {
      id: 9,
      countryId: 4,
      name: 'Texas'
    },
    {
      id: 10,
      countryId: 5,
      name: 'Sebilla'
    },
    {
      id: 11,
      countryId: 5,
      name: 'Madrid'
    }
  ];
  getCountries(): CountryI[]{
    return this.countries;
  }
  getCities(): CityI[]{
    return this.cities;
  }
}
