import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-decline-of-the-mughal-empire-qa',
  template: `<app-display-qa [qas]="declineOfTheMughalEmpireQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class DeclineOfTheMughalEmpireQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Decline Of The Mughal Empire`;

  constructor() { }

  ngOnInit(): void {
  }

  declineOfTheMughalEmpireQAs: QAModel[] = [
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
