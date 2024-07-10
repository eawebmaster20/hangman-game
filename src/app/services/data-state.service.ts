import { Injectable } from '@angular/core';
import { CategoryObj, ICategoryItem } from '../interfaces/Icategory';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataStateService {
  categories!: CategoryObj;
  selectedCategory: { name: string; data: ICategoryItem[] } =
    { name: '', data: [] } || {};
  userGuessedChars: string[] = []; // user's correctly guessed characters
  userWrongGuesses: string[] = [];
  chosenPhrase: string = '';
  healthValue = 100;
  healthStatus = `${this.healthValue}%`;

  constructor(private router: Router) {}
  routeToGame(categoryKey: any) {
    this.selectedCategory = {
      name: categoryKey,
      data: this.categories[categoryKey],
    };

    this.router.navigate(['main-game']);
  }

  detectWinOrLoss() {
    if (this.userWrongGuesses.length === 4) {
      // User lost
    }
  }
}
