import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AncientIndianHistoryQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/ancient-indian-history-qa.component';
import { StoneAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/stone-age-qa/stone-age-qa.component';
import { BronzeAgeAndHarappanCivilizationQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/harappan-culture-bronze-age-civilization-qa/harappan-culture-bronze-age-civilization-qa.component';
import { ChalcolithicAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/chalcolithic-farming-cultures-qa/chalcolithic-farming-cultures-qa.component';
import { GeneralAwarenessQAComponent } from './general-awareness-qa/general-awareness-qa.component';
import { HistoryQAComponent } from './general-awareness-qa/history-qa/history-qa.component';
import { AboutQAWorkbookComponent } from './StructuralComponents/about-qaworkbook/about-qaworkbook.component';
import { ContactInfoComponent } from './StructuralComponents/contact-info/contact-info.component';
import { TermsAndConditionsComponent } from './StructuralComponents/terms-and-conditions/terms-and-conditions.component';
import { VedicAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/vedic-age-qa/vedic-age-qa.component';
import { JainismAndBuddhismQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/jainism-and-buddhism-qa/jainism-and-buddhism-qa.component';
import { MahajanapadasQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/mahajanapadasQA/mahajanapadas-qa.component';
import { PolityQAComponent } from './general-awareness-qa/polity-qa/polity-qa.component';
import { IndianPolityQAComponent } from './general-awareness-qa/polity-qa/indian-polity-qa/indian-polity-qa.component';
import { InternationalAgreementsQAComponent } from './general-awareness-qa/polity-qa/international-agreements-qa/international-agreements-qa.component';
import { InternationalInstitutionsQAComponent } from './general-awareness-qa/polity-qa/international-institutions-qa/international-institutions-qa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutQAWorkbookComponent },
  { path: 'ContactInfo', component: ContactInfoComponent },
  { path: 'T&C', component: TermsAndConditionsComponent },
  { path: 'GeneralAwarenessQA', component: GeneralAwarenessQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA', component: HistoryQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA', component: AncientIndianHistoryQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/StoneAgeQA', component: StoneAgeQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/ChalcolithicAgeQA', component: ChalcolithicAgeQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/BronzeAgeAndHarappanCivilizationQA', component: BronzeAgeAndHarappanCivilizationQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/VedicAgeQA', component: VedicAgeQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/JainismAndBuddhismQA', component: JainismAndBuddhismQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/MahajanapadasQA', component: MahajanapadasQAComponent },
  { path: 'GeneralAwarenessQA/PolityQA', component: PolityQAComponent },
  { path: 'GeneralAwarenessQA/PolityQA/IndianPolityQA', component: IndianPolityQAComponent },
  { path: 'GeneralAwarenessQA/PolityQA/InternationalInstitutionsQA', component: InternationalInstitutionsQAComponent },
  { path: 'GeneralAwarenessQA/PolityQA/InternationalAgreementsQA', component: InternationalAgreementsQAComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }