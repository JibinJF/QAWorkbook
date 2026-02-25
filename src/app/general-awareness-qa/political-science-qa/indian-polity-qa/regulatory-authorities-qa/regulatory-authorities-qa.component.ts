import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
    selector: 'app-regulatory-authorities-qa',
    template: `<app-display-qawb-list [qaWbList]="regulatoryAuthoritiesQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
    styles: [],
    standalone: false
})
export class RegulatoryAuthoritiesQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Regulatory Authorities`;

  constructor() { }

  ngOnInit(): void {
  }

  regulatoryAuthoritiesQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Financial Stability and Development Council (FSDC) QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/RegulatoryAuthoritiesQA/FSDCQA'
    },
  ];
}