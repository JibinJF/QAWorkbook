import { Component, OnInit, Input } from '@angular/core';
import { NavElementModel } from '../nav-element-model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  @Input() navMenuElement: NavElementModel;
  @Input() parentMenuName: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
