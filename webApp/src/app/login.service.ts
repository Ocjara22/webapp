import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ResponseLogin } from './models/responselogin';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(user: string, password: string): Observable<ResponseLogin> {
    //testapis@tuten.cl
    let endpoint = environment.put_login.replace('{user}', user);

    let httpHeaders = new HttpHeaders({
      'app': 'APP_BCK',
      'password': '' + password + ''
    });

    return this.http.put<ResponseLogin>(endpoint,
      { observe: "response" },
      { headers: httpHeaders }
    ).pipe(map(response => response as ResponseLogin));
  }
}
