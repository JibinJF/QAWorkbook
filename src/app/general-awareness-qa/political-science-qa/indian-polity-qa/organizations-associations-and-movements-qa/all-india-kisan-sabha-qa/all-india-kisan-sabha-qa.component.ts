import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-all-india-kisan-sabha-qa',
  template: `<app-display-qa [qas]="allIndiaKisanSabhaQAs" [workbookName]="workbookName">
  </app-display-qa>`,
  styles: [
  ]
})
export class AllIndiaKisanSabhaQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `All India Kisan Sabha`;

  constructor() { }

  ngOnInit(): void {
  }

  allIndiaKisanSabhaQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Where did the Kisan Sabha movement start?`,
      answer: `Bihar.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Kisan Sabha movement started under the leadership of ____ ?`,
      answer: `Sahajanand Saraswati.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `All India Kisan Sabha was formed in the year _____ ?`,
      answer: `1936.`,
    },
  ];

}
