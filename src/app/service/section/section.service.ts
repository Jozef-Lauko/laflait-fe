import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Section} from "../../model/section.model";


@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private url = 'http://localhost:8088/api/section';

  constructor(private http: HttpClient) { }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.url);
  }

  getSection(sectionId: number): Observable<Section> {
    return this.http.get<Section>(`${this.url}/${sectionId}`);
  }

  createSection(section: Section): Observable<number> {
    return this.http.post<number>(this.url, section);
  }

  updateSection(section: Section): Observable<Section> {
    return this.http.put<Section>(`${this.url}/${section.id}`, section);
  }
}
