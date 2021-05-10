import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-ancient-indian-history-qa',
  template: `<app-display-qawb-list [qaWbList]="ancientIndianHistoryQAWbList" [workbookName]="workbookName"></app-display-qawb-list>`
})
export class AncientIndianHistoryQAComponent implements OnInit {

  wbNumber: number = 1;
  workbookName: string = `Ancient Indian History`;
  constructor() { }

  ngOnInit(): void {
  }

  ancientIndianHistoryQAWbList: QAWbListModel[] = [{
    wbNumber: this.wbNumber++,
    wbName: `Stone Age QA`,
    wbRoute: '/HistoryQA/AncientIndianHistoryQA/StoneAgeQA',
  },
  {
    wbNumber: this.wbNumber++,
    wbName: `Chalcolithic Age QA`,
    wbRoute: '/HistoryQA/AncientIndianHistoryQA/ChalcolithicAgeQA',
  },
  {
    wbNumber: this.wbNumber++,
    wbName: `Bronze Age And Harappan Civilization QA`,
    wbRoute: '/HistoryQA/AncientIndianHistoryQA/BronzeAgeAndHarappanCivilizationQA',
  },
  {
    wbNumber: this.wbNumber++,
    wbName: `Vedic Age QA`,
    wbRoute: '/HistoryQA/AncientIndianHistoryQA/VedicAgeQA',
  },
  {
    wbNumber: this.wbNumber++,
    wbName: `Jainism And Buddhism QA`,
    wbRoute: '/HistoryQA/AncientIndianHistoryQA/JainismAndBuddhismQA',
  },
  {
    wbNumber: this.wbNumber++,
    wbName: `Age Of Mahajanapadas QA`,
    wbRoute: '/HistoryQA/AncientIndianHistoryQA/AgeOfMahajanapadasQA',
  },
  {
    wbNumber: this.wbNumber++,
    wbName: `Legacy in Science And Civilization QA`,
    wbRoute: '/HistoryQA/AncientIndianHistoryQA/ScienceAndCivilizationLegacyQA',
  },
  ]
}
