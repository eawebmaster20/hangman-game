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
  categoryList:string[]=[]
  constructor(public dataStateService: DataStateService, public crudService: CrudService ,private router: Router){}
  ngOnInit(): void {
    this.categoryList = Object.keys(this.dataStateService.categories);
    
  }
}
