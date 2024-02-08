import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private baseUrl = 'http://localhost:9090/api/trainings'; // replace with your backend URL

  constructor(private http: HttpClient) {}

  addTraining(training: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, training);
  }

  getTrainingsByGrade(grade: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-by-grade/${grade}`);
  }
}
