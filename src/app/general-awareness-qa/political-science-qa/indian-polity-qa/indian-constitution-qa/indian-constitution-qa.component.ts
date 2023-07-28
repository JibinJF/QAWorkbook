import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-indian-constitution-qa',
  template: `<app-display-qawb-list [qaWbList]="indianConstitutionQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`,
  styles: [
  ]
})
export class IndianConstitutionQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Indian Constitution`;

  constructor() { }

  ngOnInit(): void {
  }

  indianConstitutionQAWbList: QAWbListModel[] = [
    {
      wbNumber: this.wbNumber++,
      wbName: `Introduction And Features QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/IntroductionAndFeaturesQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Constitutional History QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/ConstitutionalHistoryQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Fundamental Rights QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/FundamentalRightsQA'
    },
    {
      wbNumber: this.wbNumber++,
      wbName: `Directive Principles Of State Policy QA`,
      wbRoute: '/PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/DPSPQA'
    }, 
  ];
}
