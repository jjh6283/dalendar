import { Component, Input } from '@angular/core';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @Input({ required: true }) goal: string = "gaining muscle";
  currentPhase: string = "Follicular Phase";
  data: string = 'loading... please wait';
  rec: string = 'loading...';

  constructor(private recommendations: RecommendationService) {
    this.recommendations.recommendation(`If I am ${this.currentPhase}, give me a few suggestions of how I might be feeling based on this phase. Keep the response less than 300 characters and be sure to be accurate`).subscribe((data: ReccomendationResponse) => {
      console.log(data)
      this.data = data.choices[0]?.message.content;
      console.log(this.data)
    })

    this.recommendations.recommendation(`in 150 words or less make me a workout plan for the day and adjust the intensity level based on my energy level if i am in my ${this.currentPhase} phase and if i want to ${this.goal} take into account my hormonal cycle `).subscribe((data: ReccomendationResponse) => {
      console.log(this.goal)
      console.log(data)
      this.rec = data.choices[0]?.message.content;
      console.log(this.rec)
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