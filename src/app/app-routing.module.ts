import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AncientIndianHistoryQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/ancient-indian-history-qa.component';
import { StoneAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/stone-age-qa/stone-age-qa.component';
import { BronzeAgeAndHarappanCivilizationQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/harappan-culture-bronze-age-civilization-qa/harappan-culture-bronze-age-civilization-qa.component';
import { ChalcolithicAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/chalcolithic-farming-cultures-qa/chalcolithic-farming-cultures-qa.component';
import { HistoryQAComponent } from './general-awareness-qa/history-qa/history-qa.component';
import { AboutQAWorkbookComponent } from './StructuralComponents/about-qaworkbook/about-qaworkbook.component';
import { ContactInfoComponent } from './StructuralComponents/contact-info/contact-info.component';
import { TermsAndConditionsComponent } from './StructuralComponents/terms-and-conditions/terms-and-conditions.component';
import { VedicAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/vedic-age-qa/vedic-age-qa.component';
import { JainismAndBuddhismQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/jainism-and-buddhism-qa/jainism-and-buddhism-qa.component';
import { MahajanapadasQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/mahajanapadasQA/mahajanapadas-qa.component';
import { PoliticalScienceQAComponent } from './general-awareness-qa/political-science-qa/political-science-qa.component';
import { IndianPolityQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/indian-polity-qa.component';
import { InternationalAgreementsAndGroupingsQAComponent } from './general-awareness-qa/political-science-qa/international-agreements-and-groupings-qa/international-agreements-and-groupings-qa.component';
import { InternationalInstitutionsAndAgenciesQAComponent } from './general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/international-institutions-and-agencies-qa.component';
import { GeographyQAComponent } from './general-awareness-qa/geography-qa/geography-qa.component';
import { EconomicsQAComponent } from './general-awareness-qa/economics-qa/economics-qa.component';
import { OtherCountriesRulesAndDevelopmentsQAComponent } from './general-awareness-qa/political-science-qa/other-countries-rules-and-developments-qa/other-countries-rules-and-developments-qa.component';
import { UnitedStatesOfAmericaQAComponent } from './general-awareness-qa/political-science-qa/other-countries-rules-and-developments-qa/united-states-of-america-qa/united-states-of-america-qa.component';
import { IndianGeographyQAComponent } from './general-awareness-qa/geography-qa/indian-geography-qa/indian-geography-qa.component';
import { DrainageSystemQAComponent } from './general-awareness-qa/geography-qa/indian-geography-qa/drainage-system-qa/drainage-system-qa.component';
import { RegulatoryAuthoritiesQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/regulatory-authorities-qa/regulatory-authorities-qa.component';
import { NotForProfitCompaniesQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-qa/not-for-profit-companies-qa.component';
import { FATFQAComponent } from './general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/fatfqa/fatfqa.component';
import { ILOQAComponent } from './general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/iloqa/iloqa.component';
import { EMGFQAComponent } from './general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/emgfqa/emgfqa.component';
import { FSDCQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/regulatory-authorities-qa/fsdcqa/fsdcqa.component';
import { NCFEQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-qa/ncfeqa/ncfeqa.component';
import { PoliciesAndStrategiesQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/policies-and-strategies-qa.component';
import { NSFEQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/nsfeqa/nsfeqa.component';
import { LocationAndSizeQAComponent } from './general-awareness-qa/geography-qa/indian-geography-qa/location-and-size-qa/location-and-size-qa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutQAWorkbookComponent },
  { path: 'ContactInfo', component: ContactInfoComponent },
  { path: 'T&C', component: TermsAndConditionsComponent },
  { path: 'EconomicsQA', component: EconomicsQAComponent },
  { path: 'GeographyQA', component: GeographyQAComponent },
  { path: 'GeographyQA/IndianGeographyQA', component: IndianGeographyQAComponent },
  { path: 'GeographyQA/IndianGeographyQA/LocationAndSizeQA', component: LocationAndSizeQAComponent },
  { path: 'GeographyQA/IndianGeographyQA/DrainageSystemQA', component: DrainageSystemQAComponent },
  { path: 'HistoryQA', component: HistoryQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA', component: AncientIndianHistoryQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/StoneAgeQA', component: StoneAgeQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/ChalcolithicAgeQA', component: ChalcolithicAgeQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/BronzeAgeAndHarappanCivilizationQA', component: BronzeAgeAndHarappanCivilizationQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/VedicAgeQA', component: VedicAgeQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/JainismAndBuddhismQA', component: JainismAndBuddhismQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/MahajanapadasQA', component: MahajanapadasQAComponent },
  { path: 'PoliticalScienceQA', component: PoliticalScienceQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA', component: IndianPolityQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/RegulatoryAuthoritiesQA', component: RegulatoryAuthoritiesQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/RegulatoryAuthoritiesQA/FSDCQA', component: FSDCQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesQA', component: NotForProfitCompaniesQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesQA/NCFEQA', component: NCFEQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/PoliciesAndStrategiesQA', component: PoliciesAndStrategiesQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/PoliciesAndStrategiesQA/NSFEQA', component: NSFEQAComponent },
  { path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA', component: InternationalInstitutionsAndAgenciesQAComponent },
  { path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/FATFQA', component: FATFQAComponent },
  { path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/EMGFQA', component: EMGFQAComponent },
  { path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/ILOQA', component: ILOQAComponent },
  { path: 'PoliticalScienceQA/InternationalAgreementsAndGroupingsQA', component: InternationalAgreementsAndGroupingsQAComponent },
  { path: 'PoliticalScienceQA/OtherCountriesRulesAndDevelopmentsQA', component: OtherCountriesRulesAndDevelopmentsQAComponent },
  { path: 'PoliticalScienceQA/OtherCountriesRulesAndDevelopmentsQA/UnitedStatesOfAmericaQA', component: UnitedStatesOfAmericaQAComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }