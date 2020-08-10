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
import { TopToolbarComponent } from './StructuralComponents/top-toolbar/top-toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Home/home.component';
import { RightTopSidebarComponent } from './StructuralComponents/right-sidebar/right-top-sidebar/right-top-sidebar.component';
import { RightBottomSidebarComponent } from './StructuralComponents/right-sidebar/right-bottom-sidebar/right-bottom-sidebar.component';
import { MainComponent } from './StructuralComponents/main/main.component';
import { RightSidebarComponent } from './StructuralComponents/right-sidebar/sidebar.component';
import { DisplayQAComponent } from './StructuralComponents/display-qa/display-qa.component';
import { GeneralAwarenessQAComponent } from './general-awareness-qa/general-awareness-qa.component';
import { HistoryQAComponent } from './general-awareness-qa/history-qa/history-qa.component';
import { AncientIndianHistoryQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/ancient-indian-history-qa.component';
import { StoneAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/stone-age-qa/stone-age-qa.component';
import { ChalcolithicAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/chalcolithic-farming-cultures-qa/chalcolithic-farming-cultures-qa.component';
import { BronzeAgeAndHarappanCivilizationQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/harappan-culture-bronze-age-civilization-qa/harappan-culture-bronze-age-civilization-qa.component';
import { DisplayQAWbListComponent } from './StructuralComponents/display-qawb-list/display-qawb-list.component';
import { SyllabusNavMenuComponent } from './StructuralComponents/whatshot-nav-menu/whatshot-nav-menu.component';
import { MainNavMenuComponent } from './StructuralComponents/main-nav-menu/main-nav-menu.component';
import { LeftSidebarComponent } from './StructuralComponents/left-sidebar/left-sidebar.component';
import { LeftTopSidebarComponent } from './StructuralComponents/left-sidebar/left-top-sidebar/left-top-sidebar.component';
import { LeftBottomSidebarComponent } from './StructuralComponents/left-sidebar/left-bottom-sidebar/left-bottom-sidebar.component';
import { TermsAndConditionsComponent } from './StructuralComponents/terms-and-conditions/terms-and-conditions.component';
import { ContactInfoComponent } from './StructuralComponents/contact-info/contact-info.component';
import { AboutQAWorkbookComponent } from './StructuralComponents/about-qaworkbook/about-qaworkbook.component';
import { VedicAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/vedic-age-qa/vedic-age-qa.component';
import { JainismAndBuddhismQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/jainism-and-buddhism-qa/jainism-and-buddhism-qa.component';
import { MahajanapadasQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/mahajanapadasQA/mahajanapadas-qa.component';
import { PolityQAComponent } from './general-awareness-qa/polity-qa/polity-qa.component';
import { IndianPolityQAComponent } from './general-awareness-qa/polity-qa/indian-polity-qa/indian-polity-qa.component';
import { InternationalInstitutionsQAComponent } from './general-awareness-qa/polity-qa/international-institutions-qa/international-institutions-qa.component';
import { InternationalAgreementsQAComponent } from './general-awareness-qa/polity-qa/international-agreements-qa/international-agreements-qa.component';


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
    TopToolbarComponent,
    HomeComponent,
    RightTopSidebarComponent,
    RightBottomSidebarComponent,
    MainComponent,
    RightSidebarComponent,
    DisplayQAComponent,
    GeneralAwarenessQAComponent,
    HistoryQAComponent,
    AncientIndianHistoryQAComponent,
    StoneAgeQAComponent,
    ChalcolithicAgeQAComponent,
    BronzeAgeAndHarappanCivilizationQAComponent,
    DisplayQAWbListComponent,
    SyllabusNavMenuComponent,
    MainNavMenuComponent,
    LeftSidebarComponent,
    LeftTopSidebarComponent,
    LeftBottomSidebarComponent,
    TermsAndConditionsComponent,
    ContactInfoComponent,
    AboutQAWorkbookComponent,
    VedicAgeQAComponent,
    JainismAndBuddhismQAComponent,
    MahajanapadasQAComponent,
    PolityQAComponent,
    IndianPolityQAComponent,
    InternationalInstitutionsQAComponent,
    InternationalAgreementsQAComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppModule { }
