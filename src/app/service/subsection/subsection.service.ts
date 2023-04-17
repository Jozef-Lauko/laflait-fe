import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subsection} from "../../model/subsection/subsection.model";

@Injectable({
  providedIn: 'root'
})
export class SubsectionService {

  private url = 'http://localhost:8080/api/podkapitoly';

  constructor(private http: HttpClient) { }

  getSubsections(): Observable<Subsection[]> {
    return this.http.get<Subsection[]>(this.url);
  }

}
