import { Component, inject, OnInit } from '@angular/core';
import { DataStateService } from '../../services/data-state.service';

@Component({
  selector: 'app-word-display',
  standalone: true,
  imports: [],
  templateUrl: './word-display.component.html',
  styleUrl: './word-display.component.scss',
})
export class WordDisplayComponent implements OnInit{
  dataStateService = inject(DataStateService);

  constructor() {
  }


  ngOnInit(): void {
  }
}
