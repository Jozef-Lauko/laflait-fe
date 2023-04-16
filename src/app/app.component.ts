import { Component } from '@angular/core';
import {Router} from "@angular/router";

export enum Menu {
  THESES = 'THESES',
  SECTIONS = 'SECTIONS',
  SUBSECTIONS = 'SUBSECTIONS'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu = Menu;
  actualMenu = Menu.THESES;

  constructor(private router: Router) {
  }

  changeMenu(menuItem: Menu): void {
    switch (menuItem){
      case Menu.THESES: this.router.navigate(['these']); break;
      case Menu.SECTIONS: this.router.navigate(['section']); break;
      case Menu.SUBSECTIONS: this.router.navigate(['subsection']); break;
    }
  }
}
