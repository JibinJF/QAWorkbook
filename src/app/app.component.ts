import { Component, ChangeDetectorRef, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from './StructuralComponents/side-nav.service';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnDestroy, AfterViewInit {

  mobileQuery: MediaQueryList;
  tabletQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  private _tabletQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private leftNavMenuService: SideNavService
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 768px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);


    this.tabletQuery = media.matchMedia("(max-width: 900px)");
    this._tabletQueryListener = () => changeDetectorRef.detectChanges();
    this.tabletQuery.addListener(this._tabletQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.tabletQuery.removeListener(this._tabletQueryListener);
  }

  @ViewChild("leftNavMenu", { static: true }) sidenav: MatSidenav;

  ngAfterViewInit(): void {
    this.leftNavMenuService.setSidenav(this.sidenav);
  }
}
