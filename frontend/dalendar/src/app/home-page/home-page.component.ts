import { Component } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  currentPhase: string = "Menstruating";

  getRecommendation(message: string) {
    return axios.get(`https://localhost:3000/recommendation?message=${message}`);
  }

  async getPrediction() {
    let message = await this.getRecommendation(`What should I be expecting today if I am ${this.currentPhase}`);
    message.data.choices[0].content
    return Promise.resolve(message.data.choices[0].content);
  }

}
