import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Section} from "../../model/section/section.model";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private url = 'http://localhost:8080/api/kapitoly';

  constructor(private http: HttpClient) { }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.url);
  }

}
