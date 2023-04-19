import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Section} from "../../model/section/section.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent {

  constructor(private router: Router) {
  }

  @Input()
  sections: Array<Section> = [];

  @Output()
  sectionToUpdate = new EventEmitter<number>();

  updateSection(sectionId: number): void{
    this.sectionToUpdate.emit(sectionId);
  }
  getSubSectionBySection(id: number) {
    this.router.navigate(['/podkapitoly', id])
  }
}
