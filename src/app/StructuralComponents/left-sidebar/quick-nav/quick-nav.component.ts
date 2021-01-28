import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from '../../qawb-list-model';

@Component({
  selector: 'app-quick-nav',
  templateUrl: './quick-nav.component.html',
  styleUrls: ['./quick-nav.component.css']
})
export class QuickNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  wbNumber: number = 1;  
  qaWbList: QAWbListModel[] = [
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
    {
      wbNumber: this.wbNumber++,
      wbName: `Facts QA`,
      wbRoute: '/FactsQA'
    },
  ];
}
