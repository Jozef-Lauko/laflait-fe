import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Section} from "../../model/section/section.model";
import {Subsection} from "../../model/subsection/subsection.model";
import {Note} from "../../model/note/note.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private url = 'http://localhost:8080/api/poznamky';

  constructor(private http: HttpClient) { }

  getNotes(subsectionID: number): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.url}/${subsectionID}`);
  }

  getNote(noteID: number): Observable<Subsection> {
    return this.http.get<Subsection>(`${this.url}/by/${noteID}`);
  }

  updateNote(note: Note): Observable<number> {
    return this.http.put<number>(`${this.url}/${note.id}`, note);
  }

}
