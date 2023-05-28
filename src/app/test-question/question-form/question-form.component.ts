import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Test} from "../../model/test/test.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Question} from "../../model/testQuestion/question.model";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  @Input()
  set questionData(question: Question | undefined){
    if(question){
      this.form.setValue(question);
    }
  }

  @Output()
  formUpdate = new EventEmitter<Question>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      questionDespricption: new FormControl(null, Validators.required),
      ans1: new FormControl(null, Validators.required),
      ans2:  new FormControl(null, Validators.required),
      ans3:  new FormControl(null, Validators.required),
      ans4:  new FormControl(null, Validators.required),
    })
  }



}
