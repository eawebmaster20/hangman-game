import { Component, Inject, OnInit } from '@angular/core';
import { BackButtonComponent } from '../back-button/back-button.component';
import { CrudService } from '../../services/crud.service';



@Component({
  selector: 'app-category',
  standalone: true,
  imports: [BackButtonComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})

export class CategoryComponent implements OnInit {
  constructor(public crudService: CrudService){}
  ngOnInit(): void {
    this.crudService.getGameData().subscribe((res:any) => {
      this.crudService.categories = Object.entries(res.categories);
    });
  }
}
