import { Component } from '@angular/core';
import {Router} from "@angular/router";

export enum Menu {
  THESES = 'THESES',
  PROLOGUES = 'PROLOGUES',
  CHAPTERS = 'CHAPTERS'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu = Menu;
  actualMenu = Menu.PROLOGUES;

  constructor(private router: Router) {
  }

  changeMenu(menuItem: Menu): void {
    switch (menuItem){
      case Menu.PROLOGUES: this.router.navigate(['prologue']); break;
      case Menu.THESES: this.router.navigate(['these']); break;
      case Menu.CHAPTERS: this.router.navigate(['chapter']); break;

    }
  }
}
