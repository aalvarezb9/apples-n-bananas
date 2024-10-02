import { Injectable } from '@angular/core';
import { Observable, of, concat } from 'rxjs';
import { delay, map, repeat } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TextAnimationService {
  constructor() { }

  animateText(phrases: string[]): Observable<string> {
    const animations = phrases.map(phrase => this.animatePhrase(phrase));
    return concat(...animations).pipe(repeat());
  }

  private animatePhrase(phrase: string): Observable<string> {
    const characters = phrase.split('');
    const characterObservables = characters.map((char, index) => of(char).pipe(delay(20 * index)));
    return concat(...characterObservables).pipe(
      map((_, index) => characters.slice(0, index + 1).join(''))
    );
  }
}
