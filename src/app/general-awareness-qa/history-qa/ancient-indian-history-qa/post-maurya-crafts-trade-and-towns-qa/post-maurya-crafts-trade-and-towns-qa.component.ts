import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-post-maurya-crafts-trade-and-towns-qa',
  template: `
  <app-display-qa [qas]="postMauryaCraftsTradeAndTownsQAs" [workbookName]="workbookName">
  </app-display-qa>
  `,
  styles: [
  ]
})
export class PostMauryaCraftsTradeAndTownsQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Post-Maurya Age Crafts, Trade, and Towns`;
  constructor() { }

  ngOnInit(): void {
  }

  postMauryaCraftsTradeAndTownsQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The _____ or the <i>Questions of Milinda</i> enumerates as many as 75 
      occupations, 60 of which are connected with various kinds of crafts?`,
      answer: `Milinda Panho.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Mathura was a great centre for the manufacture of a special type of 
      cloth, which was called _____?`,
      answer: `Shataka.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Artisans were organised into guilds which were called _____?`,
      answer: `Shrenis.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Roman writer wrote <i>Natural History</i> in Latin in A.D. 77?`,
      answer: `Pliny.`,
      description: `<ul>
      <li>He complains that Rome was being drained of gold on account of her trade with 
      India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Since the Westerners were very much fond of Indian pepper, it is called 
      _____ in Sanskrit?`,
      answer: `Yavanpriya.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Most Kushan towns in India lay exactly on the north-western or _____ 
      route passing from Mathura to Taxila?`,
      answer: `Uttarapatha.`,
    }
  ];
}
