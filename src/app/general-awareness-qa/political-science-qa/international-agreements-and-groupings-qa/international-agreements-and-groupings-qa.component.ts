import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-international-agreements-and-groupings-qa',
  template: `<app-display-qa [qas]="internationalAgreementsAndGroupingsQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class InternationalAgreementsAndGroupingsQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `International Agreements And Groupings`;

  constructor() { }

  ngOnInit(): void {
  }

  internationalAgreementsAndGroupingsQAs: QAModel[] = [
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
      <li></li>
      </ul>`
    },
  ];
}