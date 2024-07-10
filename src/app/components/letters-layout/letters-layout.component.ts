import { Component } from '@angular/core';
import { DataStateService } from '../../services/data-state.service';

@Component({
  selector: 'app-letters-layout',
  standalone: true,
  imports: [],
  templateUrl: './letters-layout.component.html',
  styleUrl: './letters-layout.component.scss',
})
export class LettersLayoutComponent {
  constructor(private dataStateService: DataStateService) {
    console.log(this.dataStateService.selectedCategory);
  }

  keyLetters = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
    ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  ];

  keyClicked(event: any) {
    let clickedLetter = event.target.innerText;
    if (this.dataStateService.userGuessedChars.length < 4) {
      this.dataStateService.getUserGuessedChars(clickedLetter);
    }
  }
}
