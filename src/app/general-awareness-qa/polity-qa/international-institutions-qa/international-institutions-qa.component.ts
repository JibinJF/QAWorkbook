import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-international-institutions-qa',
  template: `<app-display-qa [qas]="internationalInstitutionsQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class InternationalInstitutionsQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `International Institutions`;

  constructor() { }

  ngOnInit(): void {
  }

  internationalInstitutionsQAs: QAModel[] = [
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
