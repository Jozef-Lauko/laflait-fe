import {Component, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../../service/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css']
})

@Injectable()
export class AuthHeaderComponent implements HttpInterceptor{
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const exclude = 'api/token';
    if(req.url.search(exclude) === -1) {
      const token = this.auth.getToken();
      if(token !== null) {
        req = req.clone({headers: req.headers.append('Authorization', token)});
      }
    }

    return next.handle(req);
  }

}
