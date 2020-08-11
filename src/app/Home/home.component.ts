import { Component } from '@angular/core';
import { QAWbListModel } from '../StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-home',
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {

  wbNumber: number = 1;
  qaWbHomeTitle: string = `Welcome! Please choose your Question & Answers Workbook😊`;

  constructor() { }

  qaWbHomeContentList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Economics QA`,
      wbRoute: '/EconomicsQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Geography QA`,
      wbRoute: '/GeographyQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `History QA`,
      wbRoute: '/HistoryQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Political Science QA`,
      wbRoute: '/PoliticalScienceQA'
    },
  ];
}
