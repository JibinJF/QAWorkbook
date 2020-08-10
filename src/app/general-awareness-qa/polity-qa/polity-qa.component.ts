import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-polity-qa',
  template: `<app-display-qawb-list [qaWbList]="polityQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
  styles: [
  ]
})
export class PolityQAComponent implements OnInit {
  
  wbNumber: number = 1;
  workbookName: string = `Polity`;

  constructor() { }

  ngOnInit(): void {
  }

  polityQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Indian Polity QAWorkbook`,
      wbRoute: '/GeneralAwarenessQA/PolityQA/IndianPolityQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `International Institutions QAWorkbook`,
      wbRoute: '/GeneralAwarenessQA/PolityQA/InternationalInstitutionsQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `International Agreements QAWorkbook`,
      wbRoute: '/GeneralAwarenessQA/PolityQA/InternationalAgreementsQA'
    },
  ];
}
