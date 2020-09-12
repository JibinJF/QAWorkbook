import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-not-for-profit-companies-qa',
  template: `<app-display-qawb-list [qaWbList]="notForProfitCompaniesQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
  styles: [
  ]
})
export class NotForProfitCompaniesQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Not For Profit Companies`;

  constructor() { }

  ngOnInit(): void {
  }

  notForProfitCompaniesQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `National Centre for Financial Education (NCFE) QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesQA/NCFEQA'
    },
  ];
}