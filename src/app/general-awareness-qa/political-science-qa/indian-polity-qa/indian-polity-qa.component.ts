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
      wbName: `Indian Constitution QAWorkbook`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Union Government QAWorkbook`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `State Government QAWorkbook`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Local Government QAWorkbook`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Union Territories QAWorkbook`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Constitutional Bodies QAWorkbook`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Statutory Bodies QAWorkbook`,
      wbRoute: ''
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Non-Constitutional And Non-Statutory Bodies QAWorkbook`,
      wbRoute: ''
    },  
  ];
}
