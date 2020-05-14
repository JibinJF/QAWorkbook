import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from '../StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-general-awareness-qa',
  template:`<app-display-qawb-list [qaWbList]="generalAwarenessQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`
})
export class GeneralAwarenessQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `General Awareness`

  constructor() { }

  ngOnInit(): void {
  }

  generalAwarenessQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `History`,
      wbRoute: '/GeneralAwarenessQA/HistoryQA'
    },
  ];
}
