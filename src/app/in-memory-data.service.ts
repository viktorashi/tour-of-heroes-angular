import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Dr. Nice', birthday: new Date(2004, 1, 1), price: 10 },
      { id: 1, name: 'Bombasto', birthday: new Date(2004, 1, 1), price: 10 },
      { id: 2, name: 'Celeritas', birthday: new Date(2004, 1, 1), price: 10 },
      { id: 3, name: 'Magneta', birthday: new Date(2004, 1, 1), price: 10 },
      { id: 4, name: 'RubberMan', birthday: new Date(2004, 1, 1), price: 10 },
      { id: 5, name: 'Dynama', birthday: new Date(2004, 1, 1), price: 10 },
      { id: 6, name: 'Dr. IQ', birthday: new Date(2004, 1, 1), price: 10 },
      { id: 7, name: 'Magma', birthday: new Date(2004, 1, 1), price: 10 },
      { id: 8, name: 'Tornado', birthday: new Date(2004, 1, 1), price: 10 },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 0;
  }
}
