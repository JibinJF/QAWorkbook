import { Component } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-constitutional-history-qa',
  template: `<app-display-qa [qas]="constitutionalHistoryQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class ConstitutionalHistoryQAComponent {

  qaNumber: number = 1;
  workbookName: string = `Constitutional History`;

  constitutionalHistoryQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Which was the first law passed by the British Parliament for India?`,
      answer: `Regulating Act, 1773.`,
      description: `<ul>
      <li>Regulating Act, 1773 was the first step taken by the British Government to control 
      the affairs of the British East India Company in India.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which was the last law passed by the British Parliament for India?`,
      answer: `Indian Independence Act, 1947.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act laid the foundation for a Central administration in India?`,
      answer: `Regulating Act, 1773.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Regulating Act, 1773, changed the post of <i>Governor</i> of Bengal to 
      ______ of Bengal?`,
      answer: `Governor General of Bengal.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the first Governor General of Bengal?`,
      answer: `Warren Hastings.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Regulating Act, 1773, created an executive council containing ______ number 
      of members to assist the Governor General?`,
      answer: `4.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Regulating Act, 1773, provided for the establishment of a Supreme Court 
      at ______?`,
      answer: `Calcutta.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Calcuatta Supreme Court came into being in the year ______?`,
      answer: `1774.`,      
      description: `<ul>
      <li>It comprised of 1 Chief Justice and 3 other judges.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Who was the first Chief Justice of Calcuatta Supreme Court?`,
      answer: `Sir Elija Impey.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of the Regulating Act, 1773?`,
      answer: `<ul>
      <li>It was the first step taken by the British Government to control the affairs of the 
      British East India Company in India.</li>
      <li>The Act laid the foundation for a Central administration in India.</li>
      <li>The Act changed the post of <i>Governor of Bengal</i> to <i>Governor General of 
      Bengal</i>.</li>
      <li>The Act created an executive council containing 4 members to assist the Governor 
      General.</li>
      <li>The Act provided for the establishment of a Supreme Court at Culcatta.</li>
      </ul>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `After the eneactment of which act did the East India Company's territories 
      in India were for the first time called the British possessions in India?`,
      answer: `Pitts India Act, 1784.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `Which Act has given the British Government supreme control over East India 
      company's affairs and its administration in India?`,
      answer: `Pitts India Act, 1784.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `List out the features of Pitts India Act, 1784?`,
      answer: `<ul>
      <li>Pitts Indian Act was passed to rectify the defects of the Regulating Act, 1773.</li>
      <li>After the enactment of the Act, East India Company's territories in India were for 
      the first time called the British possessions in India.</li>
      <li>The Act had given the British Government supreme control over East India company's 
      affairs and its administration in India.</li>
      </ul>`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
  ];

}
