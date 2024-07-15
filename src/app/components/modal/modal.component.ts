import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { DataStateService } from '../../services/data-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  private audioHover!: HTMLAudioElement;
  private audioClick!: HTMLAudioElement;
  constructor(private router: Router){}

  ngOnInit(): void {
    this.audioHover = new Audio('/assets/sounds/hover sound.wav');
    this.audioClick = new Audio('/assets/sounds/click.mp3');
  }
  playNewGame(gotoNewCategory?:boolean){
    console.log('called playgame');
    this.dataStateService.healthValue = 100
    this.dataStateService.userGuessedChars = []
    gotoNewCategory ? this.router.navigate(['category-pick']):this.dataStateService.generateRandomName();
    gotoNewCategory ? '':this.router.navigate(['main-game'])
    this.modalService.toggleModal()
  }
  resumeGame(){
    this.modalService.toggleModal()
  }

  continueGame(gotoNewCategory?:boolean){
    this.playClickOptionSound()
    console.log(this.dataStateService.healthValue);
    this.modalService.modalTitle === 'You Win'? this.dataStateService.healthValue = 0: '';
    this.dataStateService.healthValue===0 ||
    this.modalService.modalTitle === 'Paused'
    ? this.playNewGame(gotoNewCategory): this.resumeGame();
  }
  playHoverSound(): void {
    this.audioHover.currentTime = 0; // Adjust the path to your sound file
    this.audioHover.play();
  }

  playClickOptionSound(): void {
    this.audioClick.currentTime = 0;
    this.audioClick.play();
  }

  switchComponent(){
    console.log('temp logged');
    this.dataStateService.routeToGame(this.dataStateService.selectedCategory.name)
    this.router.navigate(['main-game'])
    this.dataStateService.healthValue = 100
  }
  quiteGame(){
    this.modalService.toggleModal()
    this.router.navigate([''])
    this.dataStateService.healthValue = 100
    this.dataStateService.userGuessedChars = []
  }
  modalService = inject(ModalService);
  dataStateService = inject(DataStateService);
}
