import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Section} from "../../model/section/section.model";


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent {
  @Input()
  sections: Array<Section> = [];

  @Output()
  sectionToUpdate = new EventEmitter<number>();

  updateSection(sectionId: number): void{
    this.sectionToUpdate.emit(sectionId);
  }
}
