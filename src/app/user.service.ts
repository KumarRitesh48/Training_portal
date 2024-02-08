import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:9090/api/users'; // replace with your backend URL

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  resetPassword(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset-password`, user);
  }
}
