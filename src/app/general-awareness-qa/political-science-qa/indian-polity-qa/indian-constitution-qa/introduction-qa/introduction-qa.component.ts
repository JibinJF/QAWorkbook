import { Component } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-introduction-qa',
  template: `<app-display-qa [qas]="introductionQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class IntroductionQAComponent {

  qaNumber: number = 1;
  workbookName: string = `Introduction`;

  introductionQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The term 'Constitution' is derived from which Latin term?`,
      answer: `Constituere.`,
      description: `<ul>
      <li>Constituere means to establish.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The idea of constitution originated in which country?`,
      answer: `Britain.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The idea of written constitution originated in which country?`,
      answer: `USA.`,
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
