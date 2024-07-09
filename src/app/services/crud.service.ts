import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  categories!:any
  constructor(private http: HttpClient) { }
  getGameData(){
    return this.http.get('assets/data.json');
  }
}
