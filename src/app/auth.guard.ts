import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private router: Router) {
}

canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    const deviceInfo = sessionStorage.getItem('nickname');

    if (deviceInfo) {
      return true;
    } else {
      
      this.router.navigate(['/login']);
      return false;
    }
  }
}

