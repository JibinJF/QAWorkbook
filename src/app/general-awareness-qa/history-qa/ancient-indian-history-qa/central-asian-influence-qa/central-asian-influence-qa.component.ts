import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-central-asian-influence-qa',
  template: `<app-display-qa [qas]="centralAsianInfluenceQAs" 
  [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class CentralAsianInfluenceQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Central Asian Influence`;
  constructor() { }

  ngOnInit(): void {
  }

  centralAsianInfluenceQAs: QAModel[] = [
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
