import { Component } from '@angular/core';
import {Subsection} from "../model/subsection/subsection.model";
import {SubsectionService} from "../service/subsection/subsection.service";
import {ActivatedRoute} from "@angular/router";
import {SectionService} from "../service/section/section.service";
import {Section} from "../model/section/section.model";

@Component({
  selector: 'app-subsection-page',
  templateUrl: './subsection-page.component.html',
  styleUrls: ['./subsection-page.component.css']
})
export class SubsectionPageComponent {

  subsections: Array<Subsection> = [];
  subsection?: Subsection;
  id: string | null | undefined;
  showFormModal: boolean = false;

  constructor(private route: ActivatedRoute, private service: SubsectionService) {}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getSubSections(Number (this.id));
  }

  getSubSections(id: number): void {

    this.service.getSubSections(id).subscribe((subsections: Subsection[]) => {
      this.subsections = subsections;
    })
  }

  updateSubSection(section: Subsection): void {
    this.service.updateSubSection(section).subscribe(() => {
      this.getSubSections(Number (this.id));
    })
  }

  selectSubSectionToUpdate(sectionID: number): void{
    this.service.getSubSection(sectionID).subscribe((subsection: Subsection) =>{
      this.subsection = subsection;
      this.showFormModal = true;
    })
  }

  closeModal() {
    this.showFormModal = false;
  }
}
