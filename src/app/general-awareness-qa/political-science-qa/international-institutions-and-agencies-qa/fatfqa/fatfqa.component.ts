import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-fatfqa',
  template: `<app-display-qa [qas]="fatfQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class FATFQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Financial Action Task Force (FATF)`;

  constructor() { }

  ngOnInit(): void {
  }

  fatfQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The Financial Action Task Force on Money Laundering (FATF) was established by the G-7 Summit that was held in Paris in 
      _____?`,
      answer: `1989.`,
      description: `<ul>
      <li>In 2001, the development of standards in the fight against terrorist financing was added to the mission of the FATF.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ statement published by Financial Action Task Force (FATF) at the end of each plenary meeting is often externally 
      referred to as the "grey list"?`,
      answer: `Jurisdictions under Increased Monitoring.`,
      description: `<ul>
      <li>When the FATF places a jurisdiction under increased monitoring, it means the country has committed to resolve swiftly the 
      identified strategic deficiencies within agreed timeframes and is subject to increased monitoring.</li>
      <li>Jurisdictions under increased monitoring actively works with the FATF to address strategic deficiencies in their regimes 
      to counter money laundering, terrorist financing, and proliferation financing.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ statement published by Financial Action Task Force (FATF) at the end of each plenary meeting is often externally 
      referred to as the "black list"?`,
      answer: `High-Risk Jurisdictions subject to a Call for Action.`,
      description: `<ul>
      <li>High-risk jurisdictions have significant strategic deficiencies in their regimes to counter money laundering, terrorist financing, 
      and financing of proliferation.</li>
      <li>For all countries identified as high-risk, the FATF calls on all members and urges all jurisdictions to apply enhanced due 
      diligence, and in the most serious cases, countries are called upon to apply counter-measures to protect the international financial 
      system from the ongoing money laundering, terrorist financing, and proliferation financing (ML/TF/PF) risks emanating from the country.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Financial Action Task Force (FATF) Secretariat/Headquarters is located at the OECD Headquarters in _____?`,
      answer: `Paris.`,
      description: `<ul>
      <li>The FATF President is a senior official appointed by the FATF Plenary from among its members.</li>
      <li>The term of the President begins on 1 July and ends on 30 June, two years after assuming office. </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `India is a member of the FATF since _____?`,
      answer: `2010.`,
    },
  ];
}