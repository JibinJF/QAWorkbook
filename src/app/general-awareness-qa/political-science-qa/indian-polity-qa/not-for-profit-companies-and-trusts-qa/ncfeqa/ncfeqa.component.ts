import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-ncfeqa',
  template: `<app-display-qa [qas]="ncfeQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class NCFEQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `National Centre for Financial Education (NCFE)`;

  constructor() { }

  ngOnInit(): void {
  }

  ncfeQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `National Centre for Financial Education (NCFE) is a Section 8 (Not for Profit) Company promoted by (1) _____, 
      (2) _____, (3) _____, and (4) _____?`,
      answer: `<ol>
      <li>Reserve Bank of India (RBI).</li>
      <li>Securities and Exchange Board of India (SEBI).</li>
      <li>Insurance Regulatory and Development Authority of India (IRDAI).</li>
      <li>Pension Fund Regulatory and Development Authority (PFRDA).</li>
      </ol>`,
      description: `<ul>
      <li>Objects of the Company:
        <ol>
          <li>To promote Financial Education across India for all sections of the population as per the National strategy for 
          Financial Education of Financial Stability and Development Council.</li>
          <li>To create financial awareness and empowerment.  </li>
        </ol>
      </li>
      </ul>`
    },
  ];
}