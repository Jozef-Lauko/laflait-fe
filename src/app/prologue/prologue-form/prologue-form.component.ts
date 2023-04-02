import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Prologue} from "../../model/prologue.model";

@Component({
  selector: 'app-prologue-form',
  templateUrl: './prologue-form.component.html',
  styleUrls: ['./prologue-form.component.css']
})
export class PrologueFormComponent {
  form: FormGroup;

  @Output() formCreate = new EventEmitter<Prologue>();
  @Output() formUpdate = new EventEmitter<Prologue>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      customerID: new FormControl(null, Validators.required),
      bookID: new FormControl(null, Validators.required),
    })
  }

  savePrologue(): void {
    if(this.form.valid) {
      if(this.form.controls.id.value) {
        this.formUpdate.emit(
          this.preparePrologue(this.form.controls.id.value))
      } else {
        this.formCreate.emit(this.preparePrologue());
      }
      this.form.reset();
    }
  }

  private preparePrologue(id?: number): Prologue {
    return {
      id: id !== undefined ? id : Date.now(),
      title: this.form.controls.title.value,
      text: this.form.controls.text.value
    }
  }

  @Input()
  set PrologueData(prologue: Prologue | undefined) {
    if (prologue) {
      this.form.setValue(prologue);
    }
  }
}
