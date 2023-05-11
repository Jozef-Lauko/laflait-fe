import { Component } from '@angular/core';
import {AuthService} from "../../authentication/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
    localStorage.removeItem('token');
    localStorage.clear();
  }

  isLogged(): boolean{
    return this.authService.isLogged();
  }
}
