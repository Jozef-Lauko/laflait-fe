import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Menu} from "../app.component";
import {Subsection} from "../model/subsection.model";
import {SubsectionService} from "../service/subsection/subsection.service";

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.css']
})

export class SubsectionComponent {
  menu = Menu;
  actualMenu: Menu = Menu.SUBSECTIONS;

  subsections: Array<Subsection> = [];
  subsection?: Subsection;

  constructor( private service: SubsectionService) {
    this.getAllSubsections();
  }

  createSubsection(subsection: Subsection){
    this.subsections.push(subsection);
  }

  updateSubsection(tmp: Subsection){
    const index = this.subsections.findIndex(subsection => subsection.id === tmp.id);
    if (index !== -1){
      this.subsections[index] = tmp;
    }
  }

  selectSubsectionToUpdate(subsectionId: number): void{
    this.subsection = this.subsections.find(subsection => subsection.id === subsectionId);
  }

  private getAllSubsections() {
    this.service.getSubsections().subscribe((Subsections) =>{
      this.subsections = Subsections;
    })
  }
}

