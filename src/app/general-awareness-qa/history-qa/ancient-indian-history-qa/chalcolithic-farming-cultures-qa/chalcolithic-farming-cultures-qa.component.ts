import { Component, OnInit } from '@angular/core';
import { QAModel } from 'src/app/StructuralComponents/qamodel';

@Component({
  selector: 'app-chalcolithic-farming-cultures-qa',
  template: `<app-display-qa [qas]="chalcolithicFarmingCulturesQAs" [workbookName]="workbookName"></app-display-qa>`
})
export class ChalcolithicFarmingCulturesQAComponent implements OnInit {

  qaNumber: number = 1;
  workbookName: string = `Chalcolithic Farming Cultures`;

  constructor() { }

  ngOnInit(): void {
  }

  chalcolithicFarmingCulturesQAs: QAModel[] = [
    {
      qaNumber: this.qaNumber++,
      question: `CQ1`,
      answer: `CA1`,
      description: `CD1`
    }
  ];

}
