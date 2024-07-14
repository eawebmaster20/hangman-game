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
  userGuessedChars: string[] = []; 
  userWrongGuesses: string[] = [];
  chosenPhrase: string = '';
  chosenPhraseArr: string[] = [];
  hiddenPhrase: string[] = [];
  totalWordsInPhrase: string[][] = [];
  healthValue = 100;
  healthStatus = `${this.healthValue}%`;

  constructor(private router: Router) {}

  routeToGame(categoryKey: string) {
    this.selectedCategory = {
      name: categoryKey,
      data: this.categories[categoryKey],
    };

    this.generateRandomName();
    this.router.navigate(['main-game']);
  }
  generateRandomName() {
    this.userGuessedChars = [];
    this.userWrongGuesses = [];
    this.chosenPhrase= '';
    this.chosenPhraseArr = [];
    this.hiddenPhrase = [];
    this.totalWordsInPhrase = [];
    this.healthValue = 100;
    let randomIndex = Math.floor(
      Math.random() * this.selectedCategory.data.length
    );
    this.chosenPhrase =
      this.selectedCategory.data[
        randomIndex
      ].name.toLowerCase();
    this.selectedCategory.data.splice(randomIndex,1)
    console.log(this.selectedCategory.data,this.chosenPhrase);    
    this.chosenPhraseArr =
      this.chosenPhrase.split('');
    this.hiddenPhrase =
      this.chosenPhraseArr.map((char) =>
        char === ' ' ? ' ' : '_'
      );
      this.hidePhrase()
  }
  hidePhrase() {
    let chosenPhrase = this.chosenPhrase;
    // Split word into array
    let wordsArr = chosenPhrase.split(' ');

    wordsArr.forEach((word) => {
      this.totalWordsInPhrase.push(word.split(''));
    });

    console.log(this.totalWordsInPhrase);
  }
  detectWinOrLoss() {}
}
