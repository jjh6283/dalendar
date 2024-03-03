import { Component } from '@angular/core';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  currentPhase: string = "Menstruating";
  data: string = ''

  constructor(private recommendations: RecommendationService) {
    this.recommendations.recommendation(`If I am ${this.currentPhase}, give me a few suggestions of how I might be feeling based on this phase. Keep the response less than 300 characters and be sure to be accurate`).subscribe((data: ReccomendationResponse) => {
      console.log(data)
      this.data = data.choices[0]?.message.content;
      console.log(this.data)
    })
  }
}

export type ReccomendationResponse = {
    id: string,
    object: string,
    created: number,
    model: string,
    choices: Choice[],
    usage: Usage,
    system_fingerprint: any
}

export type Choice = {
  index: number,
  message: Message,
  logprobs: any,
  finish_reason: string
}

export type Message = {
  role: string,
  content: string
}

export type Usage = {
  prompt_tokens: number,
  completion_tokens: number,
  total_tokens: number
}