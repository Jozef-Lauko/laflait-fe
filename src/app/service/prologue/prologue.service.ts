import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PrologueService {
  private url = 'http://localhost:8080/api/prologue';

  constructor(private http: HttpClient) { }


}
