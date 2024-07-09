import { Component, OnInit } from '@angular/core';
import { BackButtonComponent } from '../back-button/back-button.component';
import { CrudService } from '../../services/crud.service';
import { ICategoryItem } from '../../interfaces/Icategory';
import { Router } from '@angular/router';



@Component({
  selector: 'app-category',
  standalone: true,
  imports: [BackButtonComponent, ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})

export class CategoryComponent implements OnInit {
  
  constructor(public crudService: CrudService , private router: Router){}
  ngOnInit(): void {
    this.crudService.getGameData().subscribe((res:any) => {
      this.crudService.categories = Object.entries(res.categories);
    });
  }

  routeToGame(item: ICategoryItem){
    this.router.navigate([`/main-game/${item.name}`]); 
  }
}
