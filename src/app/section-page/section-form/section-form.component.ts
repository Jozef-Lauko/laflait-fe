import {Component, EventEmitter,Input, Output} from '@angular/core';
import {Section} from "../../model/section/section.model";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent {

  @Input()
  set sectionData(section: Section | undefined){
    if(section){
      this.form.setValue(section);
    }
  }

  @Output()
  formUpdate = new EventEmitter<Section>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      text: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  saveSection(): void{
    if(this.form.valid){
      this.formUpdate.emit(this.prepareSection())
      this.form.reset();
    }
  }

  private prepareSection(): Section{
    return{
      id: this.form.controls['id'].value,
      title: this.form.controls['title'].value,
      text: this.form.controls['text'].value,
    };
  }
}
