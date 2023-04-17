import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Theses} from "../../model/theses/theses.model";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-theses-form',
  templateUrl: './theses-form.component.html',
  styleUrls: ['./theses-form.component.css']
})
export class ThesesFormComponent {

  @Input()
  set thesisData(thesis: Theses | undefined) {
    if(thesis){
      this.form.setValue(thesis);
    }
  }

  @Output()
  formUpdate = new EventEmitter<Theses>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  saveThesis(): void {
    if(this.form.valid) {
      this.formUpdate.emit(this.prepareThesis())
      this.form.reset();
    }
  }

  private prepareThesis(): Theses {
    return {
      id: this.form.controls['id'].value,
      title: this.form.controls['title'].value,
      description: this.form.controls['description'].value,
    };
  }
}
