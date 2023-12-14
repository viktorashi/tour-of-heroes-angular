import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = this.http.get<Hero[]>(this.heroUrl);
    this.log('Hero service: am luat toti eroii');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES[id];
    this.log(`Am dat fetch la hero cu id ${id}`);
    return of(hero);
  }

  private log(message: string): void {
    this.messageService.add(`Hero Service: ${message}`);
  }
}
