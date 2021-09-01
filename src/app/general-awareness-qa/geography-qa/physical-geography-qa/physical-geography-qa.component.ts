import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-physical-geography-qa',
  template: `
    <app-display-qa [qas]="physicalGeographyQAs" [workbookName]="workbookName">
    </app-display-qa>
  `,
  styles: [
  ]
})
export class PhysicalGeographyQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Physical Geography`;

  constructor() { }

  ngOnInit(): void {
  }

  physicalGeographyQAs: QAModel[] = [
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