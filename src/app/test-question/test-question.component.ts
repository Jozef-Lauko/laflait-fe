import { Component } from '@angular/core';
import {Question} from "../model/testQuestion/question.model";
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../service/testquestion/question.service";

@Component({
  selector: 'app-test-question',
  templateUrl: './test-question.component.html',
  styleUrls: ['./test-question.component.css']
})
export class TestQuestionComponent {

  questions: Array<Question> = [];
  question?: Question;
  id: string | null | undefined;

  constructor(private route: ActivatedRoute, private service: QuestionService) {}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getQuestions(Number (this.id));
  }

  getQuestions(testId: number): void{
    this.service.getQuestions(testId).subscribe((questions: Question[]) =>{
      this.questions = questions;
    })
  }


}
