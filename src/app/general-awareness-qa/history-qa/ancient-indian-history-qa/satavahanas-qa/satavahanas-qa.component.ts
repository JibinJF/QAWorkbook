import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-satavahanas-qa',
  template: `
  <app-display-qa [qas]="satavahanasQAs" [workbookName]="workbookName"></app-display-qa>
  `,
  styles: [
  ]
})
export class SatavahanasQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Age of the Satavahanas`;
  constructor() { }

  ngOnInit(): void {
  }

  satavahanasQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
  ]
}
