import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReccomendationResponse } from '../home-page/home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(private http: HttpClient) { }

  recommendation(message: string) {
    return this.http.get<ReccomendationResponse>(`http://localhost:3000/recommendation?message=${message}`)
  }
}
