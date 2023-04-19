import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Section} from "../../model/section/section.model";
import {Subsection} from "../../model/subsection/subsection.model";

@Component({
  selector: 'app-subsection-list',
  templateUrl: './subsection-list.component.html',
  styleUrls: ['./subsection-list.component.css']
})
export class SubsectionListComponent {
  @Input()
  subsections: Array<Subsection> = [];

  @Output()
  subsectionToUpdate = new EventEmitter<number>();

  updateSubSection(sectionId: number): void{
    this.subsectionToUpdate.emit(sectionId);
  }
}
