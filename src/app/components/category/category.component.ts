import { Component, OnInit } from '@angular/core';
import { BackButtonComponent } from '../back-button/back-button.component';
import { CrudService } from '../../services/crud.service';
import { ICategoryItem } from '../../interfaces/Icategory';
import { Router } from '@angular/router';
import { DataStateService } from '../../services/data-state.service';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-category',
  standalone: true,
  imports: [BackButtonComponent, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})

export class CategoryComponent implements OnInit {
  private audioHover!: HTMLAudioElement;
  private audioClick!: HTMLAudioElement;

  categoryList:string[]=[]
  constructor(public dataStateService: DataStateService, public crudService: CrudService ,private router: Router){}
  ngOnInit(): void {
    this.audioHover = new Audio('../assets/sounds/hover sound.wav');
    this.audioClick = new Audio('../assets/sounds/click.mp3');

    this.categoryList = Object.keys(this.dataStateService.categories);

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
