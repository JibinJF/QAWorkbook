import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { NavElementModel } from '../nav-element-model';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: "app-left-side-nav",
  templateUrl: "./left-side-nav.component.html",
  styleUrls: ["./left-side-nav.component.css"],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(270deg)' })),
      state('expanded', style({ transform: 'rotate(0deg)' })),
      transition('expanded <=> collapsed',
        animate('25ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class LeftSideNavComponent {
  @Input() leftSideNavElement: NavElementModel;
  @Input() depth: number;


  constructor(public leftNavMenuService: SideNavService,
    public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(leftNavMenuItem: NavElementModel) {
    if (!leftNavMenuItem.children || !leftNavMenuItem.children.length) {
      this.router.navigate([leftNavMenuItem.route]);
      this.leftNavMenuService.closeSideNav();
    }
    if (leftNavMenuItem.children && leftNavMenuItem.children.length) {
      leftNavMenuItem.expand = !leftNavMenuItem.expand;
    }
  }
  leftSideNavElements: NavElementModel[] = [
    {
      displayName: 'Today\'s News Related QA',
      route: '',
    },
    {
      displayName: 'General Awareness QA',
      children: [
        {
          displayName: 'History QA',
          children: [
            {
              displayName: 'Ancient Indian History QA',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Ancient QA',
                  iconName: 'star_rate',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Medieval Indian History QA',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Modern Indian History QA',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Geography QA',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Polity QA',
          route: 'feedback'
        }
      ]
    }
  ];
}
