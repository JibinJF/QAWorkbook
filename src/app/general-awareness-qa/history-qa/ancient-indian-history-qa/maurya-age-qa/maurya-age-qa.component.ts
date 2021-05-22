import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-maurya-age-qa',
  template: `<app-display-qa [qas]="mauryaAgeQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class MauryaAgeQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Maurya Age`;

  constructor() { }

  ngOnInit(): void {
  }

  mauryaAgeQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li></li>
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
