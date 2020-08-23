import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-other-countries-rules-and-developments',
  template: `<app-display-qawb-list [qaWbList]="otherCountriesRulesAndDevelopmentsQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
  styles: [
  ]
})
export class OtherCountriesRulesAndDevelopmentsQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Other Countries - Rules And Developments`;

  constructor() { }

  ngOnInit(): void {
  }

  otherCountriesRulesAndDevelopmentsQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `United States Of America QA`,
      wbRoute: '/PoliticalScienceQA/OtherCountriesRulesAndDevelopmentsQA/UnitedStatesOfAmericaQA'
    },
  ];
}