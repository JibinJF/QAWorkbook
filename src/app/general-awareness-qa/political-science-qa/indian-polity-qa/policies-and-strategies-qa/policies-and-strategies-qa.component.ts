import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-policies-and-strategies-qa',
  template: `<app-display-qawb-list [qaWbList]="policiesAndStrategiesQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
  styles: [
  ]
})
export class PoliciesAndStrategiesQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Policies And Strategies`;

  constructor() { }

  ngOnInit(): void {
  }

  policiesAndStrategiesQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `National Strategy for Financial Education (NSFE) QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/PoliciesAndStrategiesQA/NSFEQA'
    },
  ];
}