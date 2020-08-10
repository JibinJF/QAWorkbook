import { Component } from '@angular/core';
import { QAWbListModel } from '../StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {

  wbNumber: number = 1;
  qaWbHomeTitle: string = `Welcome to Question & Answers Workbook! Please choose your content😊`;

  constructor() { }

  qaWbHomeContentList: QAWbListModel[] = [    
    {
      wbNumber: this.wbNumber++,
      wbName: `History QAWorkbook`,
      wbRoute: '/GeneralAwarenessQA/HistoryQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Polity QAWorkbook`,
      wbRoute: '/GeneralAwarenessQA/PolityQA'
    },
  ];
}
