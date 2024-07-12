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
    this.audio.src = '../assets/sounds/hover sound.wav'; // Adjust the path to your sound file
    this.audio.load();
    this.audio.play();
  }

  playClickOptionSound(): void {
    this.audio.src = '../assets/sounds/click.mp3';
    this.audio.load();
    this.audio.play();
  }

  modalService = inject(ModalService);
  dataStateService = inject(DataStateService);
}
