import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero!: Hero;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this.heroService
      .getHero(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
