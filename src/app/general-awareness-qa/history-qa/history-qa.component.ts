import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-history-qa',
  template: `<app-display-qawb-list [qaWbList]="historyQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`
})
export class HistoryQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `History`

  constructor() { }

  ngOnInit(): void {
  }

  historyQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Ancient Indian History`,
      wbRoute: '/GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA'
    },
  ];
}
