import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subsection} from "../../model/subsection/subsection.model";
import {Section} from "../../model/section/section.model";

@Injectable({
  providedIn: 'root'
})
export class SubsectionService {

  private url = 'http://localhost:8080/api/podkapitoly';

  constructor(private http: HttpClient) { }

  getSubSections(sectionID: number): Observable<Subsection[]> {
    return this.http.get<Subsection[]>(`${this.url}/${sectionID}`);
  }

  getSubSection(subsectionID: number): Observable<Section> {
    return this.http.get<Section>(`${this.url}/by/${subsectionID}`);
  }

  updateSubSection(subsection: Subsection): Observable<number> {
    return this.http.put<number>(`${this.url}/${subsection.id}`, subsection);
  }
}
