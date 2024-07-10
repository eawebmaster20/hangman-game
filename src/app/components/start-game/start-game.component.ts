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
  constructor(
    public dataStateService: DataStateService,
    public crudService: CrudService
  ) {}
  ngOnInit(): void {
    if (localStorage.getItem('categories')?.length) {
      this.dataStateService.categories = JSON.parse(localStorage.getItem('categories')!)
      return;
    }
    this.crudService.getGameData().subscribe((res: any) => {
      this.dataStateService.categories = res.categories;
      localStorage.setItem('categories', JSON.stringify(res.categories))
      return;
    });
  }
}
