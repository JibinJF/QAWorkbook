import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-earth-interior-qa',
  template: `
    <app-display-qa [qas]="earthInteriorQAs" [workbookName]="workbookName">
    </app-display-qa>
  `,
  styles: [
  ]
})
export class EarthInteriorQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Earth - Interior`;

  constructor() { }

  ngOnInit(): void {
  }

  earthInteriorQAs: QAModel[] = [
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
