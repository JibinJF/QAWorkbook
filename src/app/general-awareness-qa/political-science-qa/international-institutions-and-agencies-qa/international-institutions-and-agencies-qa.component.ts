import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
    selector: 'app-international-institutions-and-agencies-qa',
    template: `<app-display-qawb-list [qaWbList]="internationalInstitutionsAndAgenciesQAsindianPolityQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
    styles: [],
    standalone: false
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
      wbName: `Financial Action Task Force (FATF) QA`,
      wbRoute: '/PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/FATFQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `International Labour Organization (ILO) QA`,
      wbRoute: '/PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/ILOQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `EastMed Gas Forum (EMGF) QA`,
      wbRoute: '/PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/EMGFQA'
    },
  ];
}