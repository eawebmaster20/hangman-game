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
  chosenPhraseArray :string[] = this.chosenPhrase.toLowerCase().split('');
  healthValue = 100;
  healthStatus = `${this.healthValue}%`;

  constructor(private router: Router) {}

  
  routeToGame(categoryKey: string) {
    this.selectedCategory = {
      name: categoryKey,
      data: this.categories[categoryKey],
    };


    this.router.navigate(['main-game']);
  }

  detectWinOrLoss() {
    console.log('health value: ' + this.healthValue)
    if (this.healthValue <= 0) {
      console.log('you failed');
      return;
    }
   if(this.healthValue > 0 && this.userWrongGuesses.length < 4){
    for(let i = 0; i < this.chosenPhraseArray.length; i++){
      for(let j = 0; j < this.userGuessedChars.length; j++){
        if (this.chosenPhraseArray[i] === this.userGuessedChars[j]) {
          this.chosenPhraseArray[i] = this.userGuessedChars[j]
        }
      }
    }
             console.log("You win"); 
   }
  }
}
