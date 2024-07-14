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
  private audio!: HTMLAudioElement;
  constructor(private router: Router){}

  ngOnInit(): void {
    this.audio = new Audio();
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
    this.audio.src = '../assets/sounds/hover sound.wav'; // Adjust the path to your sound file
    this.audio.load();
    this.audio.play();
  }

  playClickOptionSound(): void {
    this.audio.src = '../assets/sounds/click.mp3';
    this.audio.load();
    this.audio.play();
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
