import { Component } from '@angular/core';
import { BackButtonComponent } from '../back-button/back-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-to-play',
  standalone: true,
  imports: [BackButtonComponent, RouterLink],
  templateUrl: './how-to-play.component.html',
  styleUrl: './how-to-play.component.scss',
})
export class HowToPlayComponent {
  private audioHover!: HTMLAudioElement;
  private audioClick!: HTMLAudioElement;

  ngOnInit(): void {
    this.audioHover = new Audio('/assets/sounds/hover sound.wav');
    this.audioClick = new Audio('/assets/sounds/click.mp3');
  }

  playHoverSound(): void {
    this.audioHover.currentTime = 0; // Adjust the path to your sound file
    this.audioHover.play();
  }

  playClickOptionSound(): void {
    this.audioClick.currentTime = 0;
    this.audioClick.play();
  }
}
