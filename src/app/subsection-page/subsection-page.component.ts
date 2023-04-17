import { Component } from '@angular/core';
import {Subsection} from "../model/subsection/subsection.model";
import {SubsectionService} from "../service/subsection/subsection.service";

@Component({
  selector: 'app-subsection-page',
  templateUrl: './subsection-page.component.html',
  styleUrls: ['./subsection-page.component.css']
})
export class SubsectionPageComponent {

  subsections: Array<Subsection> = [];
  subsection?: Subsection;

  constructor(private service: SubsectionService) {
    this.getSubsections();
  }

  getSubsections(): void {
    this.service.getSubsections().subscribe((subsections: Subsection[]) => {
      this.subsections = subsections;
    })
  }

}
