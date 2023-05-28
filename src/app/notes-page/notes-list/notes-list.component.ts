import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Note} from "../../model/note/note.model";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
  @Input()
  notes: Array<Note> = [];

  @Output()
  noteToUpdate = new EventEmitter<number>();

  updateNote(sectionId: number): void{
    this.noteToUpdate.emit(sectionId);
  }

}
