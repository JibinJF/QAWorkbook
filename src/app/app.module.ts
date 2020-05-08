import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { SideNavService } from './StructuralComponents/side-nav.service';
import { LeftSideNavComponent } from './StructuralComponents/left-side-nav/left-side-nav.component';
import { TopToolbarComponent } from './StructuralComponents/top-toolbar/top-toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodaysNewsRelatedQAComponent } from './DailyNewsRelatedQA/todays-news-related-qa/todays-news-related-qa.component';
import { RightTopSidebarComponent } from './StructuralComponents/right-top-sidebar/right-top-sidebar.component';
import { RightBottomSidebarComponent } from './StructuralComponents/right-bottom-sidebar/right-bottom-sidebar.component';
import { MainComponent } from './StructuralComponents/main/main.component';
import { RightSidebarComponent } from './StructuralComponents/right-sidebar/sidebar.component';
import { DisplayQAComponent } from './StructuralComponents/display-qa/display-qa.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  declarations: [
    AppComponent,
    LeftSideNavComponent,
    TopToolbarComponent,
    TodaysNewsRelatedQAComponent,
    RightTopSidebarComponent,
    RightBottomSidebarComponent,
    MainComponent,
    RightSidebarComponent,
    DisplayQAComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    SideNavService
  ]
})
export class AppModule { }
