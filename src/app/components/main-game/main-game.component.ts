import { Component } from '@angular/core';
import { LettersLayoutComponent } from "../letters-layout/letters-layout.component";

@Component({
  selector: 'app-main-game',
  standalone: true,
  imports: [LettersLayoutComponent],
  templateUrl: './main-game.component.html',
  styleUrl: './main-game.component.scss'
})
export class MainGameComponent {

}
