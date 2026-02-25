import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
    selector: 'app-united-states-of-america-qa',
    template: `<app-display-qa [qas]="unitedStatesOfAmericaQAs" [workbookName]="workbookName"></app-display-qa>`,
    styles: [],
    standalone: false
})
export class UnitedStatesOfAmericaQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `United States Of America`;

  constructor() { }

  ngOnInit(): void {
  }

  unitedStatesOfAmericaQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `Which Visa program of the USA allows individuals to work in specialty occupations?`,
      answer: `H-1B.`,
      description: `<ul>
      <li>A bachelor's or higher degree or its equivalent is normally the minimum requirement for such specialty occupations.</li>
      <li>Limit: 65,000 new visas each year.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `H-1B visa is normally granted for a period of up to _____ years?`,
      answer: `3 years.`,
      description: `<ul>
      <li>Time period may be extended, but generally cannot go beyond a total of 6 years.</li>
      </ul>`
    },
    {
      qaNumber: this.qaNumber++,
      question: `Spouse and unmarried children (under 21 years of age) of the H-1B visa holder may seek admission to the US
      under which visa classification?`,
      answer: `H-4 visa.`,
      description: `<ul>
      <li>Similar to H-1B visa classification, H-4 is also a nonimmigrant classification.</li>
      </ul>`
    },
  ];
}