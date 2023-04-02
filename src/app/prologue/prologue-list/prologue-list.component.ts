import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Prologue} from "../../model/prologue.model";

@Component({
  selector: 'app-prologue-list',
  templateUrl: './prologue-list.component.html',
  styleUrls: ['./prologue-list.component.css']
})
export class PrologueListComponent {

  @Input() prologues: Array<Prologue> = [];
  @Output() prologueToUpdate = new EventEmitter<number>();
  @Output() prologueToDelete = new EventEmitter<number>();

  updatePrologue(prologueId: number): void {
    this.prologueToUpdate.emit(prologueId);
  }

  deletePrologue(prologueId: number): void {
    this.prologueToDelete.emit(prologueId);
  }
}
