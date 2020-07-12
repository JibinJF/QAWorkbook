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
    wbName: `Stone Age`,
    wbRoute: '/GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/StoneAgeQA',
  },
  {
    wbNumber: this.wbNumber++,
    wbName: `Chalcolithic Age`,
    wbRoute: '/GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/ChalcolithicFarmingCulturesQA',
  },
  {
    wbNumber: this.wbNumber++,
    wbName: `Bronze Age and Harappan Civilization`,
    wbRoute: '/GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/HarappanCultureBronzeAgeCivilizationQA',
  },
  {
    wbNumber: this.wbNumber++,
    wbName: `Aryans And Rig Veda`,
    wbRoute: '/GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/AryansAndRigVedaQA',
  }
  ]
}
