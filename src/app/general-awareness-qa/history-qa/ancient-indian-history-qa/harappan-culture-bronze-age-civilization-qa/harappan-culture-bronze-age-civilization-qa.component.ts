import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-harappan-culture-bronze-age-civilization-qa',
  template: `<app-display-qa [qas]="harappanCultureBronzeAgeCivilizationQAs" [workbookName]="workbookName"></app-display-qa>`
})
export class HarappanCultureBronzeAgeCivilizationQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Harappan Culture: Bronze Age Civilization`;

  constructor() { }

  ngOnInit(): void {
  }

  harappanCultureBronzeAgeCivilizationQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `HQ1`,
      answer: `HA1`,
      description: `HD1`
    }
  ];
}
