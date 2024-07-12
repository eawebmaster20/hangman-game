import { Component, Output, EventEmitter } from '@angular/core';
import { DataStateService } from '../../services/data-state.service';

@Component({
  selector: 'app-letters-layout',
  standalone: true,
  imports: [],
  templateUrl: './letters-layout.component.html',
  styleUrl: './letters-layout.component.scss',
})
export class LettersLayoutComponent {
  constructor(private dataStateService: DataStateService) {}

  @Output() getClickedKeyEvent = new EventEmitter<string>();

  keyLetters = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O','P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  keyClicked(event: any) {
    let clickedLetter = event.target.innerText;
    this.getClickedKeyEvent.emit(clickedLetter);
  }
}
