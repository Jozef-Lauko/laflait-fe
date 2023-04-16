import { Component } from '@angular/core';
import {Section} from "../model/section.model";

import {SectionService} from "../service/section/section.service";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent {
  sections: Array<Section>= [];
  section?: Section;

  constructor(private service: SectionService) {
    this.getSections();
  }

  createSection(section: Section) {
    this.service.createSection(section).subscribe(() =>{
      console.log("Create section OK");
      this.getSections();
    })
  }

  updateSection(section: Section) {
    this.service.updateSection(section).subscribe(()=>{
      console.log("Update section OK");
      this.getSections();
    })
  }

  selectSectionToUpdate(sectionId: number): void {
    this.service.getSection(sectionId).subscribe((section: Section) => {
      this.section = section;
    })
  }

  private getSections() {
    this.service.getSections().subscribe((sections: Section[]) => {
      this.sections = sections;
    })
  }
}
