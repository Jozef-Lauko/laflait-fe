import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {These} from "../../model/these.model";

@Component({
  selector: 'app-these-form',
  templateUrl: './theses-form.component.html',
  styleUrls: ['./theses-form.component.css']
})
export class ThesesFormComponent {
  form: FormGroup;

  @Output() formCreate = new EventEmitter<These>();
  @Output() formUpdate = new EventEmitter<These>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required)
    })
  }

  saveThese(): void {
    if(this.form.valid) {
      if(this.form.controls.id.value) {
        this.formUpdate.emit(
          this.prepareThese(this.form.controls.id.value))
      } else {
        this.formCreate.emit(this.prepareThese());
      }
      this.form.reset();
    }
  }

  private prepareThese(id?: number): These {
    return {
      id: id !== undefined ? id : Date.now(),
      title: this.form.controls.title.value,
      text: this.form.controls.text.value
    }
  }

  @Input()
  set TheseData(these: These | undefined) {
    if (these) {
      this.form.setValue(these);
    }
  }
}
