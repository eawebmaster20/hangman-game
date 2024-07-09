import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartGameComponent } from './components/start-game/start-game.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
import { MainGameComponent } from './components/main-game/main-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StartGameComponent,
    HowToPlayComponent,
    MainGameComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hangman-game';
}
