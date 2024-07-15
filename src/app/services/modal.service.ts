import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalStatus = false;
  modalTitle = ''

  constructor() {}

  toggleModal() {
    this.modalStatus === true
      ? (this.modalStatus = false)
      : (this.modalStatus = true);
  }
  showPauseModal() {
    this.modalTitle ="Paused";
    this.modalStatus === true
      ? (this.modalStatus = false)
      : (this.modalStatus = true);
  }
  showWinModal() {
    this.modalTitle ="You Win";
    const boxTitle = document.querySelector<HTMLElement>('.box-title');
    if (boxTitle) { boxTitle.style.setProperty('--before-content', '"You Win"'); }
    this.modalStatus === true
      ? (this.modalStatus = false)
      : (this.modalStatus = true);
  }
  showLoseModal() {
    this.modalTitle ="You Lose";
    // document.querySelector<HTMLElement>('.box-title')!.style.setProperty('--before-content', 'You Lose');
    const boxTitle = document.querySelector<HTMLElement>('.box-title');
    if (boxTitle) { boxTitle.style.setProperty('--before-content', '"You Lose"'); }
    this.modalStatus === true
      ? (this.modalStatus = false)
      : (this.modalStatus = true);
  }
}
