import { Injectable } from '@angular/core';
import { CategoryObj, ICategoryItem } from '../interfaces/Icategory';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataStateService {
  categories!: CategoryObj;
  selectedCategory!: { name: string; data: ICategoryItem[] };
  userGuessedChars: string[] = [];
  chosenPhrase = "Breaking Bad";
  healthValue = 100
  healthStatus = `${this.healthValue}%`

  constructor(private router: Router) {}
  routeToGame(categoryKey: any) {
    this.selectedCategory = {
      name: categoryKey,
      data: this.categories[categoryKey],
    };
    console.log(this.selectedCategory);
    this.router.navigate([categoryKey.toLowerCase().replace(' ', '-')]);
  }

  getUserGuessedChars(guessedChar: string) {
    if (!this.userGuessedChars.includes(guessedChar)) {
      this.userGuessedChars.push(guessedChar);
      console.log(this.userGuessedChars);
    }
  }

  detectWinOrLoss() {
    if (this.userGuessedChars.length === 4) {
      console.log('Game Over!');
    }
  }
}
