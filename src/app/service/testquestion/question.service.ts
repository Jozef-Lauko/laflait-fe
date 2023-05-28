import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Question } from "../../model/testQuestion/question.model";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private url = 'http://localhost:8080/api/otazky';

  constructor(private http: HttpClient) { }

  getQuestions(testID: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.url);
  }

  getQuestion(testID: number): Observable<Question> {
    return this.http.get<Question>(`${this.url}/${testID}`);
  }

  updateTest(question: Question): Observable<number> {
    return this.http.put<number>(`${this.url}/${question.id}`, question);
  }

  //submitTest(answers: any): Observable<any>{
  //  return this.http.post(`${this.url}/submit-test`, answers);
  //}
}
