import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-polity-qa',
  template: `<app-display-qawb-list [qaWbList]="politicalScienceQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
  styles: [
  ]
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
      wbRoute: '/PolityQA/IndianPolityQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `International Institutions QA`,
      wbRoute: '/PolityQA/InternationalInstitutionsQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `International Agreements QA`,
      wbRoute: '/PolityQA/InternationalAgreementsQA'
    },
  ];
}
