import { Component } from '@angular/core';
import { Section } from "../model/section/section.model";
import { SectionService} from "../service/section/section.service";

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.css']
})
export class SectionPageComponent {

  sections: Array<Section> = [];
  section?: Section;

  constructor(private service: SectionService) {
    this.getSections();
  }

  getSections(): void {
    this.service.getSections().subscribe((sections: Section[]) => {
      this.sections = sections;
    })
  }

  updateSection(section: Section): void {
    this.service.updateSection(section).subscribe(() => {
      this.getSections();
    })
  }

  selectSectionToUpdate(sectionID: number): void{
    this.service.getSection(sectionID).subscribe((section: Section) =>{
      this.section = section;
    })
  }
}
