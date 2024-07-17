import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private backgroundMusic!: HTMLAudioElement;
  title = 'hangman-game';

  ngOnInit(): void {
    this.backgroundMusic = new Audio('/assets/sounds/background song.mp3');
  }

  playBackgroundMusic(): void {
    this.backgroundMusic.play();
  }
}
