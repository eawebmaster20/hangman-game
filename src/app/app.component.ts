import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HowToPlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hangman-game';
}
