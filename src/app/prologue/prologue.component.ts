import { Component } from '@angular/core';
import {Prologue} from "../model/prologue.model";

import {PrologueService} from "../service/prologue/prologue.service";

@Component({
  selector: 'app-prologue',
  templateUrl: './prologue.component.html',
  styleUrls: ['./prologue.component.css']
})

export class PrologueComponent {
  prologues: Array<Prologue>= [];
  prologue?: Prologue;

  constructor(private service: PrologueService) {
    this.getPrologues();
  }

  createPrologue(prologue: Prologue) {
    this.service.createPrologue(prologue).subscribe(() =>{
      console.log("Create prologue OK");
      this.getPrologues();
    })
  }

  updatePrologue(prolugue: Prologue) {
    this.service.updatePrologue(prolugue).subscribe(()=>{
      console.log("Update prologue OK");
      this.getPrologues();
    })
  }

  selectPrologueToUpdate(prologueId: number): void {
    this.service.getPrologue(prologueId).subscribe((prologue: Prologue) => {
      this.prologue = prologue;
    })
  }

  private getPrologues() {
    this.service.getPrologues().subscribe((prologues: Prologue[]) => {
      this.prologues = prologues;
    })
  }
}
