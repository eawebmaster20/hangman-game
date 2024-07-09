import { Injectable } from '@angular/core';
import { ICategoryItem } from '../interfaces/Icategory';

@Injectable({
  providedIn: 'root'
})
export class DataStateService {
  categories!:[string, ICategoryItem[]][]
  selectedCategory!:ICategoryItem
  constructor() { }
}
