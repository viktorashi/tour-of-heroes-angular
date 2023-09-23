import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent {
  constructor (private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
  heroes: Hero[] = [];
  ngOnInit(): void {
    this.getHeroes();
  }
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
