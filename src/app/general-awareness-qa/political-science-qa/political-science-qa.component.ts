import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
    selector: 'app-polity-qa',
    template: `<app-display-qawb-list [qaWbList]="politicalScienceQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
    styles: [],
    standalone: false
})
export class PoliticalScienceQAComponent implements OnInit {
  
  wbNumber: number = 1;
  workbookName: string = `Political Science`;

  constructor() { }

  ngOnInit(): void {
  }

  politicalScienceQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Indian Polity QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `International Institutions And Agencies QA`,
      wbRoute: '/PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `International Agreements And Groupings QA`,
      wbRoute: '/PoliticalScienceQA/InternationalAgreementsAndGroupingsQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Other Countries - Rules And Developments QA`,
      wbRoute: '/PoliticalScienceQA/OtherCountriesRulesAndDevelopmentsQA'
    },
  ];
}
