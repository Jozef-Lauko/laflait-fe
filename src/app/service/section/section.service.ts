import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Section} from "../../model/section/section.model";
import {Subsection} from "../../model/subsection/subsection.model";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private url = 'http://localhost:8080/api/kapitoly';

  constructor(private http: HttpClient) { }

  getSections(thesisID: number): Observable<Subsection[]> {
    return this.http.get<Subsection[]>(`${this.url}/${thesisID}`);
  }

  getSection(sectionID: number): Observable<Section> {
    return this.http.get<Section>(`${this.url}/by/${sectionID}`);
  }

  updateSection(section: Section): Observable<number> {
    return this.http.put<number>(`${this.url}/${section.id}`, section);
  }

}
