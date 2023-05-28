import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Test } from "../../model/test/test.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {

  @Input()
  set testData(test: Test | undefined){
    if(test){
      this.form.setValue(test);
    }
  }

  @Output()
  formUpdate = new EventEmitter<Test>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      testDescription: new FormControl(null, Validators.required)
    })
  }

  saveTest(): void{
    if(this.form.valid) {
      this.formUpdate.emit(this.prepareTest())
      this.form.reset();
    }
  }

  private prepareTest(): Test{
    return {
      id: this.form.controls['id'].value,
      testDescription: this.form.controls['title'].value,
    };
  }

}
