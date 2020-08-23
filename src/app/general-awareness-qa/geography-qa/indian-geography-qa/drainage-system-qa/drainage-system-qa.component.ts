import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-drainage-system-qa',
  template: `<app-display-qa [qas]="drainageSystemQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class DrainageSystemQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Drainage System`;

  constructor() { }

  ngOnInit(): void {
  }

  drainageSystemQAs: QAModel[] = [
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