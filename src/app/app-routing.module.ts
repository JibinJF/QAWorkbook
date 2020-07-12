import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodaysNewsRelatedQAComponent } from './DailyNewsRelatedQA/todays-news-related-qa/todays-news-related-qa.component';
import { AncientIndianHistoryQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/ancient-indian-history-qa.component';
import { StoneAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/stone-age-qa/stone-age-qa.component';
import { HarappanCultureBronzeAgeCivilizationQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/harappan-culture-bronze-age-civilization-qa/harappan-culture-bronze-age-civilization-qa.component';
import { ChalcolithicFarmingCulturesQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/chalcolithic-farming-cultures-qa/chalcolithic-farming-cultures-qa.component';
import { GeneralAwarenessQAComponent } from './general-awareness-qa/general-awareness-qa.component';
import { HistoryQAComponent } from './general-awareness-qa/history-qa/history-qa.component';
import { AboutQAWorkbookComponent } from './StructuralComponents/about-qaworkbook/about-qaworkbook.component';
import { ContactInfoComponent } from './StructuralComponents/contact-info/contact-info.component';
import { TermsAndConditionsComponent } from './StructuralComponents/terms-and-conditions/terms-and-conditions.component';
import { AryansAndRigVedaQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/aryans-and-rig-veda-qa/aryans-and-rig-veda-qa.component';

const routes: Routes = [
  { path: 'TodaysNewsRelatedQA', component: TodaysNewsRelatedQAComponent },
  { path: 'About', component: AboutQAWorkbookComponent },
  { path: 'ContactInfo', component: ContactInfoComponent },
  { path: 'T&C', component: TermsAndConditionsComponent },
  { path: 'GeneralAwarenessQA', component: GeneralAwarenessQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA', component: HistoryQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA', component: AncientIndianHistoryQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/StoneAgeQA', component: StoneAgeQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/ChalcolithicFarmingCulturesQA', component: ChalcolithicFarmingCulturesQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/HarappanCultureBronzeAgeCivilizationQA', component: HarappanCultureBronzeAgeCivilizationQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/AryansAndRigVedaQA', component: AryansAndRigVedaQAComponent },
  { path: '', redirectTo: 'TodaysNewsRelatedQA', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }