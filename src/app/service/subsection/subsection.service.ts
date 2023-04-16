import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subsection} from "../../model/subsection.model";


@Injectable({
  providedIn: 'root'
})
export class SubsectionService {
  private url = 'http://labs.fpv.umb.sk:8081/api/subsection';

  constructor(private http: HttpClient) { }

  getSubsections(): Observable<Subsection[]> {
    return this.http.get<Subsection[]>(this.url);
  }

  getSubsection(subsectionId: number): Observable<Subsection> {
    return this.http.get<Subsection>(`${this.url}/${subsectionId}`);
  }

  creatSubsection(subsection: Subsection): Observable<number> {
    return this.http.post<number>(this.url, subsection);
  }

  updateSubsection(subsection: Subsection): Observable<Subsection> {
    return this.http.put<Subsection>(`${this.url}/${subsection.id}`, subsection);
  }
}
