import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'dawn-of-history-in-south-india-qa',
  template: `
  <app-display-qa [qas]="dawnOfHistoryInSouthIndiaQAs" [workbookName]="workbookName"></app-display-qa>
  `,
  styles: [
  ]
})
export class DawnOfHistoryInSouthIndia implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Dawn Of History In South India`;
  constructor() { }

  ngOnInit(): void {
  }

  dawnOfHistoryInSouthIndiaQAs: QAModel[] = [
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
