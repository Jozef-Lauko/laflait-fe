import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Prologue} from "../../model/prologue.model";


@Injectable({
  providedIn: 'root'
})
export class PrologueService {
  private url = 'http://labs.fpv.umb.sk:8081/api/prologue';

  constructor(private http: HttpClient) { }

  getPrologues(): Observable<Prologue[]> {
    return this.http.get<Prologue[]>(this.url);
  }

  getPrologue(prologueId: number): Observable<Prologue> {
    return this.http.get<Prologue>(`${this.url}/${prologueId}`);
  }

  createPrologue(prologue: Prologue): Observable<number> {
    return this.http.post<number>(this.url, prologue);
  }

  updatePrologue(prologue: Prologue): Observable<Prologue> {
    return this.http.put<Prologue>(`${this.url}/${prologue.id}`, prologue);
  }

  deletePrologue(prologueId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${prologueId}`);
  }
}
