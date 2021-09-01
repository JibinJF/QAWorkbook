import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-geography-qa',
  template: `<app-display-qawb-list [qaWbList]="geographyQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
  styles: [
  ]
})
export class GeographyQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Geography`;

  constructor() { }

  ngOnInit(): void {
  }

  geographyQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Indian Geography QA`,
      wbRoute: '/GeographyQA/IndianGeographyQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Physical Geography QA`,
      wbRoute: '/GeographyQA/PhysicalGeographyQA'
    },
  ];
}
