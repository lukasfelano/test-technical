import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRoute,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  static statusLogged = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  static setStatus(log) {
    AuthGuard.statusLogged = log;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (AuthGuard.statusLogged) {
      return true;
    } else {
      alert("Sorry you must login");
      this.router.navigate(["/"]);
      return false;
    }
  }
}
