// reporting.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  private baseUrl = 'http://localhost:9999/api/reports'; // replace with your backend URL

  constructor(private http: HttpClient) {}

  getProgressByProject(project: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/progress-by-project/${project}`);
  }
}
