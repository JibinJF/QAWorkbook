import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-nsfeqa',
    template: `<app-display-qa [qas]="nsfeQAs" [workbookName]="workbookName"></app-display-qa>`,
    styles: [],
    standalone: false
})
export class NSFEQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `National Strategy for Financial Education (NSFE)`;

  constructor() { }

  ngOnInit(): void {
  }

  nsfeQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The National Strategy for Financial Education (NSFE): 2020-2025 document has been prepared by _____?`,
      answer: `National Centre for Financial Education (NCFE).`,
      description: `
      <ul>
        <li>National Centre for Financial Education (NCFE) is a Section 8 (Not for Profit) Company promoted by
          <ol>
            <li>Reserve Bank of India (RBI).</li>
            <li>Securities and Exchange Board of India (SEBI).</li>
            <li>Insurance Regulatory and Development Authority of India (IRDAI).</li>
            <li>Pension Fund Regulatory and Development Authority (PFRDA).</li>
          </ol>
        </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The National Strategy for Financial Education (NSFE): 2020-2025 has recommended a _____ approach for dissemination of 
      financial education in the country?`,
      answer: `‘5 C’ approach.`,
      description: `
      <ul>
        <li>‘5 C’ approach:
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
  ];
}