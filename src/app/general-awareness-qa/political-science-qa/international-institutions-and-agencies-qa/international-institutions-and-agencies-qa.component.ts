import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-international-institutions-and-agencies-qa',
  template: `<app-display-qawb-list [qaWbList]="internationalInstitutionsAndAgenciesQAsindianPolityQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
  styles: [
  ]
})
export class InternationalInstitutionsAndAgenciesQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `International Institutions And Agencies`;

  constructor() { }

  ngOnInit(): void {
  }

  internationalInstitutionsAndAgenciesQAsindianPolityQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `FATF QA`,
      wbRoute: '/PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/FATFQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `ILO QA`,
      wbRoute: '/PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/ILOQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `EMGF QA`,
      wbRoute: '/PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/EMGFQA'
    },
  ];
}