import { Component } from '@angular/core';
import { BackButtonComponent } from '../back-button/back-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-to-play',
  standalone: true,
  imports: [BackButtonComponent, RouterLink],
  templateUrl: './how-to-play.component.html',
  styleUrl: './how-to-play.component.scss',
})
export class HowToPlayComponent {}
