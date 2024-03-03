import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  getRecommendation(message: string) {
    return axios.get(`https://localhost:3000/recommendation?message=${message}`);
  }
}
