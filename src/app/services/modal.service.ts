import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalStatus = false;

  constructor() {}

  toggleModal() {
    this.modalStatus === true
      ? (this.modalStatus = false)
      : (this.modalStatus = true);
  }
}
