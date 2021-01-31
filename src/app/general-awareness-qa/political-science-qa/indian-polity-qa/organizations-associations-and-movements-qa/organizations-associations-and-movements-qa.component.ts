import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-organizations-associations-and-movements-qa',
  template: `<app-display-qawb-list [qaWbList]="organizationsAssociationsAndMovementsQAWbList" 
  [workbookName]="workbookName">
  </app-display-qawb-list>`,
  styles: [
  ]
})
export class OrganizationsAssociationsAndMovementsQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Organizations, Associations, And Movements`;

  constructor() { }

  ngOnInit(): void {
  }

  organizationsAssociationsAndMovementsQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `All India Kisan Sabha QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/OrganizationsAssociationsAndMovementsQA/AllIndiaKisanSabhaQA'
    },    
  ];

}
