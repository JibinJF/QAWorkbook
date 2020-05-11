import { Component, OnInit } from '@angular/core';
import { QAWbListModel } from 'src/app/StructuralComponents/qawb-list-model';

@Component({
  selector: 'app-ancient-indian-history-qa',
  templateUrl: './ancient-indian-history-qa.component.html',
  styleUrls: ['./ancient-indian-history-qa.component.css']
})
export class AncientIndianHistoryQAComponent implements OnInit {

  wbNumber: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  ancientIndianHistoryQAWbList: QAWbListModel[] = [{
    wbNumber: this.wbNumber++,
    wbName: `The Stone Age: The Early Man`,
    wbRoute: '/GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/StoneAgeQA',
  },
  {
    wbNumber: this.wbNumber++,
    wbName: `Chalcolithic Farming Cultures`,
    wbRoute: '/GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/ChalcolithicFarmingCulturesQA',
  },
  {
    wbNumber: this.wbNumber++,
    wbName: `The Harappan Culture: Bronze Age Civilization`,
    wbRoute: '/GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/HarappanCultureBronzeAgeCivilizationQA',
  }
  ]
}
