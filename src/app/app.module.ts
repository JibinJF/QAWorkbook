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
import { NoticeBoardComponent } from './StructuralComponents/notice-board/notice-board.component';
import { MainComponent } from './StructuralComponents/main/main.component';
import { RightSidebarComponent } from './StructuralComponents/right-sidebar/right-sidebar.component';
import { DisplayQAComponent } from './StructuralComponents/display-qa/display-qa.component';
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
import { QuickNavComponent } from './StructuralComponents/left-sidebar/quick-nav/quick-nav.component';
import { TermsAndConditionsComponent } from './StructuralComponents/terms-and-conditions/terms-and-conditions.component';
import { ContactInfoComponent } from './StructuralComponents/contact-info/contact-info.component';
import { AboutQAWorkbookComponent } from './StructuralComponents/about-qaworkbook/about-qaworkbook.component';
import { VedicAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/vedic-age-qa/vedic-age-qa.component';
import { JainismAndBuddhismQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/jainism-and-buddhism-qa/jainism-and-buddhism-qa.component';
import { AgeOfMahajanapadasQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/age-of-mahajanapadasQA/age-of-mahajanapadas-qa.component';
import { PoliticalScienceQAComponent } from './general-awareness-qa/political-science-qa/political-science-qa.component';
import { IndianPolityQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/indian-polity-qa.component';
import { InternationalInstitutionsAndAgenciesQAComponent } from './general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/international-institutions-and-agencies-qa.component';
import { InternationalAgreementsAndGroupingsQAComponent } from './general-awareness-qa/political-science-qa/international-agreements-and-groupings-qa/international-agreements-and-groupings-qa.component';
import { EconomicsQAComponent } from './general-awareness-qa/economics-qa/economics-qa.component';
import { GeographyQAComponent } from './general-awareness-qa/geography-qa/geography-qa.component';
import { OtherCountriesRulesAndDevelopmentsQAComponent } from './general-awareness-qa/political-science-qa/other-countries-rules-and-developments-qa/other-countries-rules-and-developments-qa.component';
import { UnitedStatesOfAmericaQAComponent } from './general-awareness-qa/political-science-qa/other-countries-rules-and-developments-qa/united-states-of-america-qa/united-states-of-america-qa.component';
import { IndianGeographyQAComponent } from './general-awareness-qa/geography-qa/indian-geography-qa/indian-geography-qa.component';
import { DrainageSystemQAComponent } from './general-awareness-qa/geography-qa/indian-geography-qa/drainage-system-qa/drainage-system-qa.component';
import { RegulatoryAuthoritiesQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/regulatory-authorities-qa/regulatory-authorities-qa.component';
import { NotForProfitCompaniesAndTrustsQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-and-trusts-qa/not-for-profit-companies-and-trusts-qa.component';
import { FATFQAComponent } from './general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/fatfqa/fatfqa.component';
import { EMGFQAComponent } from './general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/emgfqa/emgfqa.component';
import { ILOQAComponent } from './general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/iloqa/iloqa.component';
import { FSDCQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/regulatory-authorities-qa/fsdcqa/fsdcqa.component';
import { NCFEQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-and-trusts-qa/ncfeqa/ncfeqa.component';
import { PoliciesAndStrategiesQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/policies-and-strategies-qa.component';
import { NSFEQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/nsfeqa/nsfeqa.component';
import { BottomAdBarComponent } from './StructuralComponents/bottom-ad-bar/bottom-ad-bar.component';
import { LocationAndSizeQAComponent } from './general-awareness-qa/geography-qa/indian-geography-qa/location-and-size-qa/location-and-size-qa.component';
import { FactsQAComponent } from './general-awareness-qa/facts-qa/facts-qa.component';
import { BooksAndAuthorsQAComponent } from './general-awareness-qa/facts-qa/books-and-authors-qa/books-and-authors-qa.component';
import { OrganizationsAssociationsAndMovementsQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/organizations-associations-and-movements-qa/organizations-associations-and-movements-qa.component';
import { AllIndiaKisanSabhaQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/organizations-associations-and-movements-qa/all-india-kisan-sabha-qa/all-india-kisan-sabha-qa.component';
import { ModernIndianHistoryQAComponent } from './general-awareness-qa/history-qa/modern-indian-history-qa/modern-indian-history-qa.component';
import { EighteenthCenturyIndiaQAComponent } from './general-awareness-qa/history-qa/modern-indian-history-qa/eighteenth-century-india-qa/eighteenth-century-india-qa.component';
import { IndianConstitutionQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/indian-constitution-qa.component';
import { FundamentalRightsQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/fundamental-rights-qa/fundamental-rights-qa.component';
import { DPSPQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/dpspqa/dpspqa.component';
import { ScienceAndCivilizationLegacyQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/science-and-civilization-legacy-qa/science-and-civilization-legacy-qa.component';


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
    NoticeBoardComponent,
    MainComponent,
    RightSidebarComponent,
    DisplayQAComponent,
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
    QuickNavComponent,
    TermsAndConditionsComponent,
    ContactInfoComponent,
    AboutQAWorkbookComponent,
    VedicAgeQAComponent,
    JainismAndBuddhismQAComponent,
    AgeOfMahajanapadasQAComponent,
    PoliticalScienceQAComponent,
    IndianPolityQAComponent,
    InternationalInstitutionsAndAgenciesQAComponent,
    InternationalAgreementsAndGroupingsQAComponent,
    EconomicsQAComponent,
    GeographyQAComponent,
    OtherCountriesRulesAndDevelopmentsQAComponent,
    UnitedStatesOfAmericaQAComponent,
    IndianGeographyQAComponent,
    DrainageSystemQAComponent,
    RegulatoryAuthoritiesQAComponent,
    NotForProfitCompaniesAndTrustsQAComponent,
    FATFQAComponent,
    EMGFQAComponent,
    ILOQAComponent,
    FSDCQAComponent,
    NCFEQAComponent,
    PoliciesAndStrategiesQAComponent,
    NSFEQAComponent,
    BottomAdBarComponent,
    LocationAndSizeQAComponent,
    FactsQAComponent,
    BooksAndAuthorsQAComponent,
    OrganizationsAssociationsAndMovementsQAComponent,
    AllIndiaKisanSabhaQAComponent,
    ModernIndianHistoryQAComponent,
    EighteenthCenturyIndiaQAComponent,
    IndianConstitutionQAComponent,
    FundamentalRightsQAComponent,
    DPSPQAComponent,
    ScienceAndCivilizationLegacyQAComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppModule { }
