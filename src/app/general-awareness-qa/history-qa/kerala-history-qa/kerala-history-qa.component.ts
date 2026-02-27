import { Component } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-kerala-history-qa',
  template: `<app-display-qawb-list [qaWbList]="keralaHistoryQAWbList" [workbookName]="workbookName">
  </app-display-qawb-list>`,
  styles: [],
  standalone: false
})

export class KeralaHistoryQAComponent {
  wbNumber: number = 1;
  workbookName: string = `Kerala History`;

  keralaHistoryQAWbList: QAWbListModel[] = [
      {
        wbNumber: this.wbNumber++,
        wbName: `Travancore History`,
        wbRoute: '/HistoryQA/KeralaHistoryQA/TravancoreHistoryQA',
      },
    ]
}
