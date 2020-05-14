import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-stone-age-qa',
  template: `<app-display-qa [qas]="stoneAgeQAs" [workbookName]="workbookName"></app-display-qa>`
})
export class StoneAgeQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Stone Age`;

  constructor() { }

  ngOnInit(): void {
  }

  stoneAgeQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `SQ1`,
      answer: `SA1`,
      description: `SD1`
    }
  ];
}
