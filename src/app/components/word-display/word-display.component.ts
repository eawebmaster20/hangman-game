import { Component, inject } from '@angular/core';
import { DataStateService } from '../../services/data-state.service';

@Component({
  selector: 'app-word-display',
  standalone: true,
  imports: [],
  templateUrl: './word-display.component.html',
  styleUrl: './word-display.component.scss',
})
export class WordDisplayComponent {
  dataStateService = inject(DataStateService);
  hiddenPhrase: string[] = [];
  totalWordsInPhrase: string[][] = [];

  constructor() {
    this.hidePhrase();
  }

  hidePhrase() {
    let chosenPhrase = this.dataStateService.chosenPhrase;
    // Split word into array
    let wordsArr = chosenPhrase.split(' ');

    wordsArr.forEach((word) => {
      this.totalWordsInPhrase.push(word.split(''));
    });

    console.log(this.totalWordsInPhrase);

    // Represent each character as an underscore
    // for (let i = 0; i < chosenPhrase.length; i++) {
    //   if (chosenPhrase[i] !== ' ') {
    //     this.hiddenPhrase.push('_');
    //   } else {
    //     this.hiddenPhrase.push(' ');
    //   }
    // }
    // this.totalWordsInPhrase = this.hiddenPhrase.join('').split(' ');
    // console.log(this.hiddenPhrase);
    // console.log(this.totalWordsInPhrase);
  }
}
