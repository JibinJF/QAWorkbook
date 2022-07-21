import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-gupta-age-qa',
  template: `<app-display-qa [qas]="guptaAgeQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class GuptaAgeQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Gupta Age`;
  constructor() { }

  ngOnInit(): void {
  }

  guptaAgeQAs: QAModel[] = [
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
