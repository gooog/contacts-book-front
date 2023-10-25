import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
     return this.http.post(this.apiEndpoint + `/auth/login`, { email, password })
  }
  register(email: string, password: string) {
    return this.http.post(this.apiEndpoint + `/register`, { email, password })
 }

}
