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
  private audioHover!: HTMLAudioElement;
  private audioClick!: HTMLAudioElement;

  constructor(
    public dataStateService: DataStateService,
    public crudService: CrudService
  ) {}
  ngOnInit(): void {
    this.audioHover = new Audio('/assets/sounds/hover sound.wav');
    this.audioClick = new Audio('/assets/sounds/click.mp3');
    
    this.crudService.getGameData().subscribe((res: any) => {
      this.dataStateService.categories = res.categories;
    });
  }

  playHoverSound(): void {
    this.audioHover.currentTime = 0; // Adjust the path to your sound file
    this.audioHover.play();
  }

  playClickOptionSound(): void {
    this.audioClick.currentTime = 0;
    this.audioClick.play();
  }

}
