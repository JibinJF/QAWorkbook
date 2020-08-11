import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-international-agreements-qa',
  template: `<app-display-qa [qas]="internationalAgreementsQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class InternationalAgreementsQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `International Agreements`;

  constructor() { }

  ngOnInit(): void {
  }

  internationalAgreementsQAs: QAModel[] = [
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
