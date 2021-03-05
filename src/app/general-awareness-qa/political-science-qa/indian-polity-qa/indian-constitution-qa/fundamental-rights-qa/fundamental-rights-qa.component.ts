import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-fundamental-rights-qa',
  template: `<app-display-qa [qas]="fundamentalRightsQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class FundamentalRightsQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Fundamental Rights`;

  constructor() { }

  ngOnInit(): void {
  }

  fundamentalRightsQAs: QAModel[] = [
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