import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-emgfqa',
  template: `<app-display-qa [qas]="otherInternationalInstitutionsAndAgenciesQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class EMGFQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `EastMed Gas Forum (EMGF)`;

  constructor() { }

  ngOnInit(): void {
  }

  otherInternationalInstitutionsAndAgenciesQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Following the discovery of gas in the Mediterranean waters, EastMed Gas Forum (EMGF) was formed by which all countries?`,
      answer: `Cyprus, Egypt, Greece, Israel, Italy, Jordan, and Palestine.`,
      description: `<ul>
      <li>EMGF foundation charter was signed in Cairo on 2020 January 16.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Headquarters of EastMed Gas Forum (EMGF) is located in _____?`,
      answer: `Cairo.`,
    },
  ];
}