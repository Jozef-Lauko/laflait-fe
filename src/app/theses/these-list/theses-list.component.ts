import {Component, EventEmitter, Input, Output} from '@angular/core';
import {These} from "../../model/these.model";


@Component({
  selector: 'app-these-list',
  templateUrl: './theses-list.component.html',
  styleUrls: ['./theses-list.component.css']
})
export class ThesesListComponent {

  @Input() theses: Array<These> = [];
  @Output() theseToUpdate = new EventEmitter<number>();
  @Output() theseToDelete = new EventEmitter<number>();

  updateThese(theseId: number): void {
    this.theseToUpdate.emit(theseId);
  }

  deleteThese(theseId: number): void {
    this.theseToDelete.emit(theseId);
  }
}
