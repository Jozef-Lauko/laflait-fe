import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Theses} from "../../model/theses/theses.model";

@Component({
  selector: 'app-theses-list',
  templateUrl: './theses-list.component.html',
  styleUrls: ['./theses-list.component.css']
})
export class ThesesListComponent {
  @Input()
  theses: Array<Theses> = [];

  @Output()
  thesisToUpdate = new EventEmitter<number>();

  updateThesis(thesisId: number): void {
    this.thesisToUpdate.emit(thesisId);
  }
}
