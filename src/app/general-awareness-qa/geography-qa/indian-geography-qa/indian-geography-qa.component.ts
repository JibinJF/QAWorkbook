import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
    selector: 'app-indian-geography-qa',
    template: `
    <app-display-qawb-list [qaWbList]="indianGeographyQAWbList" [workbookName]="workbookName">
    </app-display-qawb-list>
    `,
    styles: [],
    standalone: false
})
export class IndianGeographyQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Indian Geography`;

  constructor() { }

  ngOnInit(): void {
  }

  indianGeographyQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Location And Size QA`,
      wbRoute: '/GeographyQA/IndianGeographyQA/LocationAndSizeQA'
    }, 
    {
      wbNumber: this.wbNumber++,
      wbName: `Drainage System QA`,
      wbRoute: '/GeographyQA/IndianGeographyQA/DrainageSystemQA'
    },    
  ];
}