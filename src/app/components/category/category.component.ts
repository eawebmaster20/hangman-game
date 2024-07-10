import { Component, Inject, OnInit } from '@angular/core';
import { BackButtonComponent } from '../back-button/back-button.component';
import { CrudService } from '../../services/crud.service';
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
  constructor(public dataStateService: DataStateService, public crudService: CrudService){}
  ngOnInit(): void {
    this.crudService.getGameData().subscribe((res:any) => {
      this.dataStateService.categories = Object.entries(res.categories);
    });
  }
}
