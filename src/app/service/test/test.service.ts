import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Test } from "../../model/test/test.model";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url = 'http://localhost:8080/api/testy';

  constructor(private http: HttpClient) { }

  getTests(): Observable<Test[]> {
    return this.http.get<Test[]>(this.url);
  }

  getTest(testID: number): Observable<Test> {
    return this.http.get<Test>(`${this.url}/${testID}`);
  }

  updateTest(test: Test): Observable<number> {
    return this.http.put<number>(`${this.url}/${test.id}`, test);
  }
}
