import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStateService } from '../services/data-state.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectGameGuard implements CanActivate {
  constructor(private router: Router,private dataStateService:DataStateService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.dataStateService.selectedCategory.name) {
      return true;
    }
    this.router.navigate(['/category-pick']);
    return false;
  }
}
