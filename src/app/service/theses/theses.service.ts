import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Theses} from "../../model/theses/theses.model";

@Injectable({
  providedIn: 'root'
})
export class ThesesService {

  private url = 'http://localhost:8080/api/tezy';

  constructor(private http: HttpClient) { }

  getTheses(): Observable<Theses[]> {
    return this.http.get<Theses[]>(this.url);
  }

  getThesis(thesisID: number): Observable<Theses> {
    return this.http.get<Theses>(`${this.url}/${thesisID}`);
  }

  updateThesis(thesis: Theses): Observable<number> {
    return this.http.put<number>(`${this.url}/${thesis.id}`, thesis);
  }
}
