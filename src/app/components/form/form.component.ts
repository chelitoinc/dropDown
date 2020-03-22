import { Component, OnInit } from '@angular/core';
import { CountryI, CityI} from '../../models/model.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DataService]
})
export class FormComponent implements OnInit {

  public selectedCountry: CountryI = {id:0, name: ''};
  public countries: CountryI[];
  public cities: CityI[];
  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.countries = this.dataSvc.getCountries();
  }

  onSelect(id:number):void{
    // this.cities = this.dataSvc.getCities().filter(item => item.countryId = id);
    this.cities = this.dataSvc.getCities().filter(item => item.countryId == id);
  }

}
