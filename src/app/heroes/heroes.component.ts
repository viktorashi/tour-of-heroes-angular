import { Component } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent {
  hero : Hero= {
    name: 'Gigel' ,
    id:1,
    birthday : new Date(2004, 1, 26),
    price : 6.9
  };
  _defaultCurrencyCode = "EUR"
}
