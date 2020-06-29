import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(user: string, password: string): Promise<HttpResponse<any>> {
    //testapis@tuten.cl
    let endpoint = environment.put_login.replace('{user}', user);
    let httpHeaders = new HttpHeaders({
      // 'Accept': 'application/json',
      'app': 'APP_BCK',
      'password': '' + password + ''
    });

    return this.http.put<any>(endpoint,
      { observe: 'response', },
      { headers: httpHeaders }
    ).toPromise<HttpResponse<any>>();
  }
}
