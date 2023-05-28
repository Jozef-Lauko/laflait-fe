import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Section} from "../../model/section/section.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Note} from "../../model/note/note.model";

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent {
  @Input()
  set sectionData(section: Section | undefined){
    if (section) {
      this.form.patchValue({
        id: section.id,
        title: section.title,
        text: section.text,
        notesId: section.notesid,
        notesText: section.notestext,
        notesImageData: section.notesimageData,
        notesCode: section.notescode
      });
    }
  }

  @Output()
  formUpdate = new EventEmitter<Section>();

  @Output()
  closeModalWindow: EventEmitter<void> = new EventEmitter<void>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      text: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      notesId: new FormControl(null),
      notesText: new FormControl(null),
      notesImageData: new FormControl(null),
      notesCode: new FormControl(null)
    })
  }

  saveSection(): void{
    if(this.form.valid){
      this.formUpdate.emit(this.prepareSection())
      this.closeModal();
      this.form.reset();
    }
  }

  private prepareSection(): Section {
    return {
      id: this.form.controls['id'].value,
      title: this.form.controls['title'].value,
      text: this.form.controls['text'].value,
      notesid: this.form.controls['notesId'].value,
      notestext: this.form.controls['notesText'].value,
      notescode: this.form.controls['notesCode'].value,
      notesimageData: this.form.controls['notesImageData'].value,
      haveSubsection: false,
    };
  }

  closeModal() {
    this.closeModalWindow.emit();
  }
}
