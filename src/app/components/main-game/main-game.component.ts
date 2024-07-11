import { Component, inject } from '@angular/core';
import { LettersLayoutComponent } from '../letters-layout/letters-layout.component';
import { WordDisplayComponent } from '../word-display/word-display.component';
import { DataStateService } from '../../services/data-state.service';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-main-game',
  standalone: true,
  imports: [LettersLayoutComponent, WordDisplayComponent, ModalComponent],
  templateUrl: './main-game.component.html',
  styleUrl: './main-game.component.scss',
})
export class MainGameComponent {
  dataStateService = inject(DataStateService);
  modalService = inject(ModalService);

  constructor() {
    // Generate random name
    this.generateRandomName();
  }

  generateRandomName() {
    let randomIndex = Math.floor(
      Math.random() * this.dataStateService.selectedCategory.data.length
    );
    this.dataStateService.chosenPhrase =
      this.dataStateService.selectedCategory.data[
        randomIndex
      ].name.toLowerCase();
    this.dataStateService.chosenPhraseArr =
      this.dataStateService.chosenPhrase.split('');
    this.dataStateService.hiddenPhrase =
      this.dataStateService.chosenPhraseArr.map((char) =>
        char === ' ' ? ' ' : '_'
      );
    console.log(this.dataStateService.chosenPhrase);
    console.log(this.dataStateService.hiddenPhrase);
  }

  checkGuess(letter: string) {
    // If the chosen phrase doesn't not include the user's guess:
    // Decrease the health value by 25
    // Push the letter to the wrong guesses array
    this.dataStateService.detectWinOrLoss();
    if (!this.dataStateService.chosenPhrase.includes(letter.toLowerCase())) {
      if (this.dataStateService.healthValue > 0) {
        this.dataStateService.healthValue -= 25;
        this.dataStateService.detectWinOrLoss();
      }
      this.dataStateService.userWrongGuesses.push(letter.toLowerCase());
    } else {
      for (let i = 0; i < this.dataStateService.chosenPhrase.length; i++) {
        if (
          this.dataStateService.chosenPhrase[i].toLowerCase() ===
          letter.toLowerCase()
        ) {
          this.dataStateService.hiddenPhrase[i] = letter.toLowerCase();
          console.log(this.dataStateService.hiddenPhrase);
        }
      }

      // console.log(this.dataStateService.hiddenPhrase.join(''));
      // console.log(this.dataStateService.chosenPhrase.toLowerCase());

      if (
        this.dataStateService.hiddenPhrase.join('') ===
        this.dataStateService.chosenPhrase.toLowerCase()
      ) {
        // console.log('You win!');
        // Modal goes here
      }

      this.dataStateService.userGuessedChars.push(letter.toLowerCase());
      console.log(this.dataStateService.hiddenPhrase);
      this.dataStateService.detectWinOrLoss();
    }
  }

  getKeyClicked(key: string) {
    this.checkGuess(key);
  }
}
