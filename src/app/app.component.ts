import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LettersLayoutComponent } from './components/letters-layout/letters-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LettersLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hangman-game';
}
