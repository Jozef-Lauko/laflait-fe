import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Question} from "../../model/testQuestion/question.model";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  constructor(private router: Router) {
  }

  @Input()
  questions: Array<Question> = [];

  @Output()
  questionToUpdate = new EventEmitter<number>();

  updateQuestion(questionId: number): void{
    this.questionToUpdate.emit(questionId);
  }

  getTestByTestQuestion(id: number){
    this.router.navigate(['/otazky', id])
  }

}
