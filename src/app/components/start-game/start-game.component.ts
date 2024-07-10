import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { DataStateService } from '../../services/data-state.service';

@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss',
})
export class StartGameComponent implements OnInit {
  private audio!: HTMLAudioElement;

  constructor(
    public dataStateService: DataStateService,
    public crudService: CrudService
  ) {}
  ngOnInit(): void {
    this.audio = new Audio();
    this.crudService.getGameData().subscribe((res: any) => {
      this.dataStateService.categories = res.categories;
    });
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

}
