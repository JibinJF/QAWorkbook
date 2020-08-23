import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-not-for-profit-companies-qa',
  template: `<app-display-qa [qas]="notForProfitCompaniesQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class NotForProfitCompaniesQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Not For Profit Companies`;

  constructor() { }

  ngOnInit(): void {
  }

  notForProfitCompaniesQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The National Strategy for Financial Education (NSFE): 2020-2025 document has been prepared by _____?`,
      answer: `National Centre for Financial Education (NCFE).`,
      description: `<ul>
      <li>The Strategy has recommended a ‘5 C’ approach for dissemination of financial education in the country:
        <ul>
          <li>Development of relevant <font color="white">Content</font> in curriculum in schools, colleges and training establishments.</li>
          <li>Developing <font color="white">Capacity</font> among intermediaries involved in providing financial services.</li>
          <li>Leveraging the positive effect of <font color="white">Community</font> led model for financial literacy through appropriate 
          <font color="white">Communication</font> strategy.</li>
          <li>Enhancing <font color="white">Collaboration</font> among various stakeholders.</li>
        </ul>
      </li>
      </ul>`
    },
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
    {
      qaNumber: this.qaNumber++,
      question: `?`,
      answer: `.`,
      description: `<ul>
      <li>.</li>
      </ul>`
    },
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