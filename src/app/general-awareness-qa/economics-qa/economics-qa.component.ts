import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
    selector: 'app-economics-qa',
    template: `<app-display-qawb-list [qaWbList]="economicsQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
    styles: [],
    standalone: false
})
export class EconomicsQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Economics`;

  constructor() { }

  ngOnInit(): void {
  }

  economicsQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Indian Economy QA`,
      wbRoute: '/EconomicsQA/IndianEconomyQA'
    },    
  ];
}
