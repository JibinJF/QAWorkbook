import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-main-nav-menu',
  templateUrl: './main-nav-menu.component.html',
  styleUrls: ['./main-nav-menu.component.css'],
  exportAs: 'mainNavMenu'
})
export class MainNavMenuComponent {

  @ViewChild(MatMenu, {static: true}) menu: MatMenu;

}
