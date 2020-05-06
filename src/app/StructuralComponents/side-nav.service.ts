import { Injectable } from "@angular/core";
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: "root"
})
export class SideNavService {
  private sideNav: MatSidenav;
  constructor() { }

  public setSidenav(sideNav: MatSidenav) {
    this.sideNav = sideNav;
  }

  public toggleSideNav() {
    return this.sideNav.toggle();
  }

  public closeSideNav() {
    this.sideNav.close();
  }

  public openSideNav() {
    this.sideNav.open();
  }
}
