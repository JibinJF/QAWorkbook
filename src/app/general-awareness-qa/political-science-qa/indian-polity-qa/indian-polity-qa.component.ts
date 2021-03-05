import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-indian-polity-qa',
  template: `<app-display-qawb-list [qaWbList]="indianPolityQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
  styles: [
  ]
})
export class IndianPolityQAComponent implements OnInit {
  
  wbNumber: number = 1;
  workbookName: string = `Indian Polity`;

  constructor() { }

  ngOnInit(): void {
  }

  indianPolityQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Indian Constitution QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Union Government QA`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `State Government QA`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Local Government QA`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Union Territories QA`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Constitutional Bodies QA`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Statutory Bodies QA`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Non-Constitutional And Non-Statutory Bodies QA`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Regulatory Authorities QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/RegulatoryAuthoritiesQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Policies And Strategies QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/PoliciesAndStrategiesQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Not For Profit Companies And Trusts QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesAndTrustsQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Organizations, Associations, And Movements QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/OrganizationsAssociationsAndMovementsQA'
    },
  ];
}
