import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { DataStateService } from '../../services/data-state.service';
import { Router, RouterLink } from '@angular/router';

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
  playNewGame(){
    console.log('called playgame');
    this.router.navigate(['temp']);
    this.dataStateService.userGuessedChars = []
    this.modalService.toggleModal()
  }
  resumeGame(){
    this.modalService.toggleModal()
  }

  continueGame(){
    this.playClickOptionSound()
    console.log(this.dataStateService.healthValue);
    this.dataStateService.healthValue===0 ? this.playNewGame(): this.resumeGame()
  }
  playHoverSound(): void {
    this.audioHover.currentTime = 0; // Adjust the path to your sound file
    this.audioHover.play();
  }

  playClickOptionSound(): void {
    this.audioClick.currentTime = 0;
    this.audioClick.play();
  }

  modalService = inject(ModalService);
  dataStateService = inject(DataStateService);
}
