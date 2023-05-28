import { Component } from '@angular/core';
import { Note } from "../model/note/note.model";
import { NoteService } from "../service/note/note.service";
import {ActivatedRoute} from "@angular/router";
import {Section} from "../model/section/section.model";
import {Subsection} from "../model/subsection/subsection.model";

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.css']
})
export class NotesPageComponent {

  notes: Array<Note> = [];
  note?: Note;
  id: string | null | undefined;

  constructor(private route: ActivatedRoute, private service: NoteService) {}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getNotes(Number (this.id));
  }

  getNotes(id: number): void{

    this.service.getNotes(id).subscribe((sections: Section[]) => {
      this.notes = sections;
    })
  }

  updateNote(section: Section): void{
    this.service.updateNote(section).subscribe(()=> {
      this.getNotes(Number (this.id));
    })
  }

  selectNoteToUpdate(sectionID: number): void{
    this.service.getNote(sectionID).subscribe((section: Section) =>{
      this.note = section;
    })
  }

}
