import { Injectable } from '@angular/core';
import { CategoryObj, ICategoryItem } from '../interfaces/Icategory';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataStateService {
  categories!:CategoryObj
  selectedCategory:{name:string, data:ICategoryItem[]}={name:'',data:[]} || {}
  constructor(private router:Router) { }
  routeToGame(categoryKey:any){
    this.selectedCategory = {name:categoryKey, data:this.categories[categoryKey]}
    console.log(this.selectedCategory);
    this.router.navigate(['main-game'])
  }
}
