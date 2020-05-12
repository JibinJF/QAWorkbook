import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopToolbarComponent {

  constructor(private leftNavMenuService: SideNavService) { }

  toggleLeftNavMenu() {
    this.leftNavMenuService.toggleSideNav();
  }
}