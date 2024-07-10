import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStateService } from '../services/data-state.service';

export class potectCategoryPageGuard implements CanActivate {
  constructor(private router: Router,private dataStateService:DataStateService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.dataStateService.categories) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
