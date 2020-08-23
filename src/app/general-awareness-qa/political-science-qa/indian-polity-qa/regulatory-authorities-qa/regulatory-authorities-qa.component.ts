import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-regulatory-authorities-qa',
  template: `<app-display-qa [qas]="regulatoryAuthoritiesQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class RegulatoryAuthoritiesQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Regulatory Authorities`;

  constructor() { }

  ngOnInit(): void {
  }

  regulatoryAuthoritiesQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Financial Stability and Development Council (FSDC) was set up by the Government as the apex level forum 
      in the year _____ ?`,
      answer: `2010 (December).`,
      description: `<ul>
      <li>Set up with a view to strengthening and institutionalizing the mechanism for maintaining financial stability, 
      enhancing inter-regulatory coordination, and promoting financial sector development.</li>
      <li>Without prejudice to the autonomy of regulators, the Council monitors macro prudential supervision of the economy, 
      including functioning of large financial conglomerates, and addresses inter-regulatory coordination and financial 
      sector development issues. It also focuses on financial literacy and financial inclusion. </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Chairman of the Financial Stability and Development Council (FSDC) is _____ ?`,
      answer: `The Finance Minister.`,
      description: `<ul>
      <li>Members include the heads of financial sector Regulators, Finance Secretary and/or Department of Economic Affairs Secretary, 
      Department of Financial Services Secretary, and Chief Economic Adviser.</li>
      <li>The Council can invite experts to its meeting if required.</li>
      <li>The FSDC Secretariat in DEA is the Secretariat for the Council.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The Financial Stability and Development Council (FSDC) Sub-committee has been set up under the chairmanship of _____ ?`,
      answer: `RBI Governor.`,
      description: `<ul>
      <li>The Financial Stability Unit (FSU) of RBI is the Secretariat for the Sub-committee.</li>
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