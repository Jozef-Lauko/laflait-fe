import { Component } from '@angular/core';
import { Section } from "../model/section/section.model";
import { SectionService} from "../service/section/section.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.css']
})
export class SectionPageComponent {

  sections: Array<Section> = [];
  section?: Section;
  id: string | null | undefined;

  constructor(private route: ActivatedRoute, private service: SectionService) {}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getSections(Number (this.id));
  }

  getSections(id: number): void {
    this.service.getSections(id).subscribe((sections: Section[]) => {
      this.sections = sections;
    })
  }

  updateSection(section: Section): void {
    this.service.updateSection(section).subscribe(() => {
      this.getSections(Number (this.id));
    })
  }

  selectSectionToUpdate(sectionID: number): void{
    this.service.getSection(sectionID).subscribe((section: Section) =>{
      this.section = section;
    })
  }


}
