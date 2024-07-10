import { Component, inject } from '@angular/core';
import { LettersLayoutComponent } from '../letters-layout/letters-layout.component';
import { DataStateService } from '../../services/data-state.service';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-main-game',
  standalone: true,
  imports: [LettersLayoutComponent, ModalComponent],
  templateUrl: './main-game.component.html',
  styleUrl: './main-game.component.scss',
})
export class MainGameComponent {
 dataStateService = inject(DataStateService);
 modalService = inject(ModalService);
 displayHealthValue() {
  console.log(this.dataStateService.healthValue)
 }

 checkGuess(letter:string){
  if(!this.dataStateService.chosenPhrase.includes(letter)){
    this.dataStateService.healthValue -= 25
    console.log(this.dataStateService.healthValue)
  }
}

 getKeyClicked(key: string) {
  if (this.dataStateService.userGuessedChars.length < 4) {
    this.checkGuess(key);
    this.dataStateService.getUserGuessedChars(key);
    }
 }
 
}
