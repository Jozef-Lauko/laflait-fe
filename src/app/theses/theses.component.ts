import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Menu} from "../app.component";
import {These} from "../model/these.model";
import {ThesesService} from "../service/theses/theses.service";

@Component({
  selector: 'app-these',
  templateUrl: './theses.component.html',
  styleUrls: ['./theses.component.css']
})

export class ThesesComponent {
  menu = Menu;
  actualMenu: Menu = Menu.THESES;

  theses: Array<These> = [];
  these?: These;

  constructor( private service: ThesesService) {
    this.getAllTheses();
  }
  createThese(these: These){
    this.theses.push(these);
  }

  updateThese(tmp: These){
    const index = this.theses.findIndex(these => these.id === tmp.id);
    if (index !== -1){
      this.theses[index] = tmp;
    }
  }

  selectTheseToUpdate(theseId: number): void{
    this.these = this.theses.find(these => these.id === theseId);
  }

  private getAllTheses() {
    this.service.getTheses().subscribe((Theses) =>{
      this.theses = Theses;
    })
  }
}

