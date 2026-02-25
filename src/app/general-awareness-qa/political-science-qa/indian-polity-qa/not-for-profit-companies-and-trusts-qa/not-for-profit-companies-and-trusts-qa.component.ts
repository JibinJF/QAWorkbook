import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
    selector: 'app-not-for-profit-companies-and-trusts-qa',
    template: `<app-display-qawb-list [qaWbList]="notForProfitCompaniesAndTrustsQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
    styles: [],
    standalone: false
})
export class NotForProfitCompaniesAndTrustsQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Not For Profit Companies And Trusts`;

  constructor() { }

  ngOnInit(): void {
  }

  notForProfitCompaniesAndTrustsQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `National Centre for Financial Education (NCFE) QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesAndTrustsQA/NCFEQA'
    },
  ];
}