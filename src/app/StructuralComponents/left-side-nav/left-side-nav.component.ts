import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Router } from '@angular/router';

import { NavElementModel } from '../nav-element-model';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: "app-left-side-nav",
  templateUrl: "./left-side-nav.component.html",
  styleUrls: ["./left-side-nav.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class LeftSideNavComponent {
  // @Input() leftSideNavElement: NavElementModel;
  // @Input() depth: number;


  constructor(public leftNavMenuService: SideNavService,
    public router: Router) {
    // if (this.depth === undefined) {
    //   this.depth = 0;
    // }
  }

  onItemSelected(leftNavMenuItem: NavElementModel) {
    if (!leftNavMenuItem.children || !leftNavMenuItem.children.length) {
      this.router.navigate([leftNavMenuItem.route]);
    }
    if (leftNavMenuItem.children && leftNavMenuItem.children.length) {
      leftNavMenuItem.expand = !leftNavMenuItem.expand;
    }
  }
  leftSideNavElements: NavElementModel[] = [
    {
      displayName: 'General Awareness QA',
      menuName: "generalAwarenessQA",
      children: [
        {
          displayName: 'History QA',
          children: [
            {
              displayName: 'Chalcolithic Farming Cultures',
              route: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/ChalcolithicFarmingCulturesQA'
            },
            {
              displayName: 'The Harappan Culture: Bronze Age Civilization The Harappan Culture: Bronze Age Civilization',
              route: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/HarappanCultureBronzeAgeCivilizationQA'
            }
          ]
        },
      ]
    },
  ];
}