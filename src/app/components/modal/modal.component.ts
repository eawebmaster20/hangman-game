import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  private audio!: HTMLAudioElement;

  ngOnInit(): void {
    this.audio = new Audio();
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
}
