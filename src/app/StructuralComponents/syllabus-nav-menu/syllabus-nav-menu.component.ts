import { Component, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-syllabus-nav-menu',
  templateUrl: './syllabus-nav-menu.component.html',
  styleUrls: ['./syllabus-nav-menu.component.css'],
  exportAs: 'syllabusNavMenu'
})
export class SyllabusNavMenuComponent {

  @ViewChild(MatMenu, {static: true}) menu: MatMenu;

}
