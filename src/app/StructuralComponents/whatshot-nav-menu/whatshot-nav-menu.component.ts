import { Component, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-whatshot-nav-menu',
  templateUrl: './whatshot-nav-menu.component.html',
  styleUrls: ['./whatshot-nav-menu.component.css'],
  exportAs: 'whatshotNavMenu'
})
export class SyllabusNavMenuComponent {

  @ViewChild(MatMenu, {static: true}) menu: MatMenu;

}
