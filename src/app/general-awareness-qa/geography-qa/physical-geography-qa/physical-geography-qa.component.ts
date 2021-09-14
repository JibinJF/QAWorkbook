import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-physical-geography-qa',
  template: `
    <app-display-qawb-list [qaWbList]="physicalGeographyQAWbList" [workbookName]="workbookName">
    </app-display-qawb-list>
  `,
  styles: [
  ]
})
export class PhysicalGeographyQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Physical Geography`;

  constructor() { }

  ngOnInit(): void {
  }

  physicalGeographyQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Earth - Origin and Evolution QA`,
      wbRoute: '/GeographyQA/PhysicalGeographyQA/EarthOriginAndEvolutionQA'
    },  
  ];
}