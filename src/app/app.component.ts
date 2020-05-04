import { Component, ChangeDetectorRef, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from './StructuralComponents/side-nav.service';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
// export class AppComponent  {
//   name = 'Angular';
// }
export class AppComponent implements OnDestroy, AfterViewInit {
  name = "Angular";
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private leftNavMenuService: SideNavService
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  @ViewChild("leftNavMenu", { static: true }) sidenav: MatSidenav;

  ngAfterViewInit(): void {
    this.leftNavMenuService.setSidenav(this.sidenav);
  }
}
