import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-iloqa',
  template: `<app-display-qa [qas]="iloQAs" [workbookName]="workbookName"></app-display-qa>`,
  styles: [
  ]
})
export class ILOQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `International Labour Organization (ILO)`;

  constructor() { }

  ngOnInit(): void {
  }

  iloQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `The International Labour Organization (ILO) was created as part of which treaty?`,
      answer: `Treaty of Versailles.`,
      description: `<ul>
      <li>ILO is a tripartite U.N. agency which brings together governments, employers and workers.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The International Labour Organization (ILO) was created in the year _____ ?`,
      answer: `1919.`,
      description: `<ul>      
      <li>In 1946, the ILO became a specialized agency of the newly formed United Nations.</li>
      </ul>`
    },    
    {
      qaNumber: this.qaNumber++,
      question: `Headquarters of the International Labour Organization (ILO) is in _____ ?`,
      answer: `Geneva.`,
      description: `<ul>
      <li>The ILO moved to Geneva in the summer of 1920.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `The International Labour Organization (ILO) established the Geneva-based _____ in 1960?`,
      answer: `International Institute for Labour Studies.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `The International Labour Organization (ILO) established the _____ in Turin in 1965?`,
      answer: `International Training Centre.`,
    },
    {
      qaNumber: this.qaNumber++,
      question: `_____ are legal instruments drawn up by the ILO's constituents (governments, employers and workers) 
      for setting out basic principles and rights at work?`,
      answer: `International labour standards.`,
      description: `<ul>
      <li>They are either <font color="white">Conventions (or Protocols)</font>, which are legally binding international treaties 
      that may be ratified by member states, or <font color="white">Recommendations</font>, which serve as non-binding guidelines.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Once an International labour standard is adopted at the annual International Labour Conference, 
      member states are required under article 19(6) of the ILO Constitution, to submit it to their competent authority 
      (normally Parliament) within a period of _____ months for consideration/ratification?`,
      answer: `12.`,
      description: `<ul>
      <li>If it is ratified, a Convention generally comes into force for that country one year after the date of ratification.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `How many conventions have been identified by the International Labour Organization (ILO) Governing Body 
      as “fundamental”?`,
      answer: `8.`,
      description: `<ul>
      <li>The eight fundamental Conventions are:
        <ol>
          <li>Convention No.29</li>
          <li>Convention No.87</li>
          <li>Convention No.98</li>
          <li>Convention No.100</li>         
          <li>Convention No.105</li>
          <li>Convention No.111</li>
          <li>Convention No.138</li>
          <li>Convention No.182</li>          
        </ol>
      </li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `What is convention No.87, a fundamental convention of the International Labour Organization (ILO)?`,
      answer: `Freedom of Association and Protection of the Right to Organise Convention, 1948.`, 
    },
    {
      qaNumber: this.qaNumber++,
      question: `What is convention No.98, a fundamental convention of the International Labour Organization (ILO)?`,
      answer: ` Right to Organise and Collective Bargaining Convention, 1949.`,      
    },{
      qaNumber: this.qaNumber++,
      question: `What is convention No.29, a fundamental convention of the International Labour Organization (ILO)?`,
      answer: ` Forced Labour Convention, 1930.`,      
    },
    {
      qaNumber: this.qaNumber++,
      question: `What is convention No.105, a fundamental convention of the International Labour Organization (ILO)?`,
      answer: ` Abolition of Forced Labour Convention, 1957.`,      
    },
    {
      qaNumber: this.qaNumber++,
      question: `What is convention No.138, a fundamental convention of the International Labour Organization (ILO)?`,
      answer: `Minimum Age Convention, 1973.`,      
    },
    {
      qaNumber: this.qaNumber++,
      question: `What is convention No.182, a fundamental convention of the International Labour Organization (ILO)?`,
      answer: `Worst Forms of Child Labour Convention, 1999.`,      
    },
    {
      qaNumber: this.qaNumber++,
      question: `What is convention No.100, a fundamental convention of the International Labour Organization (ILO)?`,
      answer: `Equal Remuneration Convention, 1951.`,      
    },
    {
      qaNumber: this.qaNumber++,
      question: `What is convention No.111, a fundamental convention of the International Labour Organization (ILO)?`,
      answer: ` Discrimination (Employment and Occupation) Convention, 1958.`,      
    },
  ];
}