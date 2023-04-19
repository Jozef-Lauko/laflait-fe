import {AuthService} from "../service/auth.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {state} from "@angular/animations";
import {Observable} from "rxjs";

export class AuthGuard {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |
  UrlTree {
  if (this.auth.isLogged()) {
  return true;
  }
  this.router.navigate(['/login']);
  return false;
  }

}
