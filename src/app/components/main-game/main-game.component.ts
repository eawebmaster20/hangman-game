import { Component, inject } from '@angular/core';
import { LettersLayoutComponent } from '../letters-layout/letters-layout.component';
import { DataStateService } from '../../services/data-state.service';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-main-game',
  standalone: true,
  imports: [LettersLayoutComponent, ModalComponent],
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
  }

  checkGuess(letter: string) {
    // If the chosen phrase doesn't not include the user's guess:
    // Decrease the health value by 25
    // Push the letter to the wrong guesses array
    if (!this.dataStateService.chosenPhrase.includes(letter.toLowerCase())) {
      this.dataStateService.healthValue -= 25;
      this.dataStateService.userWrongGuesses.push(letter.toLowerCase());
    } else {
      this.dataStateService.userGuessedChars.push(letter.toLowerCase());
    }
  }

  getKeyClicked(key: string) {
    this.checkGuess(key);
  }
}
