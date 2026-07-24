import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivateFn, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceComponent } from '../components/Services/service.auth';

@Injectable({
  providedIn: 'root'
})
export class ShoppingUserRegisterGuard implements CanActivate
{

  constructor(private router:Router, private auth:AuthServiceComponent){}

  canActivate(): boolean
  {
    let isLoggedIn = this.auth.isAuthenticated();
    if(!isLoggedIn)
    {
      this.router.navigate(['login/user']);
    }
    return true;
  }

}