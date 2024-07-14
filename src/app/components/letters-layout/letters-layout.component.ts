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
  private audioHover!: HTMLAudioElement;
  private audioClick!: HTMLAudioElement;

  constructor(private dataStateService: DataStateService) {}

  @Output() getClickedKeyEvent = new EventEmitter<string>();

  keyLetters = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
    ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  ];

  keyClicked(event: any) {
    let clickedLetter = event.target.innerText;
    this.getClickedKeyEvent.emit(clickedLetter); 
  }

  ngOnInit(): void {
    this.audioHover = new Audio('../assets/sounds/hover sound.wav');
    this.audioClick = new Audio('../assets/sounds/click.mp3');
  }

  playClickOptionSound(): void {
    this.audioClick.currentTime = 0;
    this.audioClick.play();
  }

}
