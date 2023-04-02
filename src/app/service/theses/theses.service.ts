import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {These} from "../../model/these.model";


@Injectable({
  providedIn: 'root'
})
export class ThesesService {
  private url = 'http://labs.fpv.umb.sk:8081/api/these';

  constructor(private http: HttpClient) { }

  getTheses(): Observable<These[]> {
    return this.http.get<These[]>(this.url);
  }

  getThese(theseId: number): Observable<These> {
    return this.http.get<These>(`${this.url}/${theseId}`);
  }

  createThese(these: These): Observable<number> {
    return this.http.post<number>(this.url, these);
  }

  updateThese(these: These): Observable<These> {
    return this.http.put<These>(`${this.url}/${these.id}`, these);
  }

  deleteThese(theseId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${theseId}`);
  }
}
