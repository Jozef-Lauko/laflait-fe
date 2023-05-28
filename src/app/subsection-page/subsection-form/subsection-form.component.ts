import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Section} from "../../model/section/section.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subsection} from "../../model/subsection/subsection.model";

@Component({
  selector: 'app-subsection-form',
  templateUrl: './subsection-form.component.html',
  styleUrls: ['./subsection-form.component.css']
})
export class SubsectionFormComponent {
  @Input()
  set subsectionData(section: Subsection | undefined){
    if(section){
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
  formUpdate = new EventEmitter<Subsection>();

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

  saveSubSection(): void{
    if(this.form.valid){
      this.formUpdate.emit(this.prepareSubSection())
      this.closeModal();
      this.form.reset();
    }
  }

  private prepareSubSection(): Subsection{
    return{
      id: this.form.controls['id'].value,
      title: this.form.controls['title'].value,
      text: this.form.controls['text'].value,
      notesid: this.form.controls['notesId'].value,
      notestext: this.form.controls['notesText'].value,
      notescode: this.form.controls['notesCode'].value,
      notesimageData: this.form.controls['notesImageData'].value,
    };
  }

  closeModal() {
    this.closeModalWindow.emit();
  }
}
