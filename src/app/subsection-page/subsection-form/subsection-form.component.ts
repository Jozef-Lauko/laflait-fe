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
  set subsectionData(subsection: Subsection | undefined){
    if(subsection){
      this.form.setValue(subsection);
    }
  }

  @Output()
  formUpdate = new EventEmitter<Subsection>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      text: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  saveSubSection(): void{
    if(this.form.valid){
      this.formUpdate.emit(this.prepareSubSection())
      this.form.reset();
    }
  }

  private prepareSubSection(): Subsection{
    return{
      id: this.form.controls['id'].value,
      title: this.form.controls['title'].value,
      text: this.form.controls['text'].value,
    };
  }
}
