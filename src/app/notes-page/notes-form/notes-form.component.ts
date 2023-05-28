import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Subsection} from "../../model/subsection/subsection.model";
import {Note} from "../../model/note/note.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css']
})
export class NotesFormComponent {
  @Input()
  set noteData(section: Note | undefined) {
    if (section) {
      this.form.setValue(section);
    }
  }

  @Output()
  formUpdate = new EventEmitter<Note>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      title: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      text: new FormControl(null,[Validators.required, Validators.minLength(3)])
    })
  }

  saveNote(): void{
    if(this.form.valid){
      this.formUpdate.emit(this.prepareNote())
      this.form.reset();
    }
  }

  private prepareNote(): Note{
    return{
      id: this.form.controls['id'].value,
      title: this.form.controls['title'].value,
      text: this.form.controls['text'].value,
    };
  }
}
