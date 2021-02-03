import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-modern-indian-history-qa',
  template: `<app-display-qawb-list [qaWbList]="modernIndianHistoryQAWbList" [workbookName]="workbookName">
  </app-display-qawb-list>`,
  styles: [
  ]
})
export class ModernIndianHistoryQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Modern Indian History`;

  constructor() { }

  ngOnInit(): void {
  }

  modernIndianHistoryQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Decline Of The Mughal Empire QA`,
      wbRoute: '/HistoryQA/ModernIndianHistoryQA/DeclineOfTheMughalEmpireQA',
    },
  ]
}
