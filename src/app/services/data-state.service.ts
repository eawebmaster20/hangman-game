import { Injectable } from '@angular/core';
import { CategoryObj, ICategoryItem } from '../interfaces/Icategory';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class DataStateService {
  categories!: CategoryObj;
  selectedCategory: {name:string, data:ICategoryItem[]}={name:'',data:[]} || {}
  indexTracking:CategoryObj= {"Animals" :[{"name": 'Elephant', selected: false}]}
  userGuessedChars: string[] = [];
  chosenPhrase = "Breaking Bad";
  healthValue = 100
  healthStatus = `${this.healthValue}%`

  constructor(private router: Router) {}

  
  routeToGame(categoryKey: string) {
    this.selectedCategory = {
      name: categoryKey,
      data: this.categories[categoryKey],
    };
    console.log(this.selectedCategory);
    this.getRandomWord()
    this.router.navigate(['main-game'])

  }

  getRandomWord(){
    const wordIndex: number = Math.floor( Math.random() * (this.selectedCategory.data.length -1));
    if (!this.indexTracking.hasOwnProperty(this.selectedCategory.name)) {
      this.indexTracking[this.selectedCategory.name] = [];
    }
    this.indexTracking[this.selectedCategory.name]?.push(this.selectedCategory.data[wordIndex]) 
    console.log(this.indexTracking)
    return this.selectedCategory.data[wordIndex]
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
