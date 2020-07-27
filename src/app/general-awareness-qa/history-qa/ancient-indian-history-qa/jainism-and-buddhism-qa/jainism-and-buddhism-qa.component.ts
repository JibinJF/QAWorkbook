import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-jainism-and-buddhism-qa',
  template: `<app-display-qa [qas]="jainismAndBuddhismQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class JainismAndBuddhismQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Jainism And Buddhism`;

  constructor() { }

  ngOnInit(): void {
  }

  jainismAndBuddhismQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li></li>
      </ul>`
    },
  ];

}
