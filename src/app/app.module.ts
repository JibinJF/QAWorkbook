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
import { GeneralAwarenessQAComponent } from './general-awareness-qa/general-awareness-qa.component';
import { HistoryQAComponent } from './general-awareness-qa/history-qa/history-qa.component';
import { AncientIndianHistoryQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/ancient-indian-history-qa.component';
import { StoneAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/stone-age-qa/stone-age-qa.component';
import { ChalcolithicFarmingCulturesQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/chalcolithic-farming-cultures-qa/chalcolithic-farming-cultures-qa.component';
import { HarappanCultureBronzeAgeCivilizationQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/harappan-culture-bronze-age-civilization-qa/harappan-culture-bronze-age-civilization-qa.component';
import { DisplayQAWbListComponent } from './StructuralComponents/display-qawb-list/display-qawb-list.component';


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
    GeneralAwarenessQAComponent,
    HistoryQAComponent,
    AncientIndianHistoryQAComponent,
    StoneAgeQAComponent,
    ChalcolithicFarmingCulturesQAComponent,
    HarappanCultureBronzeAgeCivilizationQAComponent,
    DisplayQAWbListComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    SideNavService
  ]
})
export class AppModule { }
