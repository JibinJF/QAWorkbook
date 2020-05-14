import { Component } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-todays-news-related-qa',
  template: `<app-display-qa [workbookName]="workbookName" [qas]="todaysNewsRelatedQAs"></app-display-qa>`
})
export class TodaysNewsRelatedQAComponent {

  qaNumber: number = 1;
  workbookName: string = `Todays's News Related`;

  constructor() { }

  todaysNewsRelatedQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: 'What is COVID-19? Briefly explain its symptoms, treatment and the ways through which it spreads?',
      answer: `Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
    Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.`,
      description: `HOW IT SPREADS The virus that causes COVID- 19 is mainly transmitted through droplets generated when an 
    infected person coughs, sneezes, or exhales.These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
    You can be infected by breathing in the virus if you are within close proximity of someone who has COVID - 19, or by touching 
    a contaminated surface and then your eyes, nose or mouth.`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Q2?`,
      answer: `A2`
    },
    {
      qaNumber: this.qaNumber++,
      question: `q3-this question is deliberately made big to test multi line behaviour of the app?`,
      answer: `a3`,
      description: `d3`
    }
  ];
}
