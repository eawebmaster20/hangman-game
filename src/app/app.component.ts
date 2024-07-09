import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartGameComponent } from './components/start-game/start-game.component';
import { MainGameComponent } from './components/main-game/main-game.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartGameComponent, MainGameComponent,HowToPlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hangman-game';
}
