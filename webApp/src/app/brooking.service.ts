import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseBrooking } from './models/responsebrooking';

@Injectable({
  providedIn: 'root'
})
export class BrookingService {

  constructor(private http: HttpClient) { }

  public getBrokking(): Observable<ResponseBrooking[]> {

    let endpoint = environment.get_grid.replace('{user}', 'contacto@tuten.cl');
    let token = sessionStorage.getItem('token');

    let httpHeaders = new HttpHeaders({
      'app': 'APP_BCK',
      'adminemail': 'testapis@tuten.cl',
      'token': '' + token + ''

    });

    return this.http.get<ResponseBrooking[]>(endpoint,
      { headers: httpHeaders }
    ).pipe();

  }

}
