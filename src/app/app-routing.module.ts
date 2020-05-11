import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodaysNewsRelatedQAComponent } from './DailyNewsRelatedQA/todays-news-related-qa/todays-news-related-qa.component';
import { AncientIndianHistoryQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/ancient-indian-history-qa.component';
import { StoneAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/stone-age-qa/stone-age-qa.component';
import { HarappanCultureBronzeAgeCivilizationQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/harappan-culture-bronze-age-civilization-qa/harappan-culture-bronze-age-civilization-qa.component';
import { ChalcolithicFarmingCulturesQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/chalcolithic-farming-cultures-qa/chalcolithic-farming-cultures-qa.component';

const routes: Routes = [
  { path: 'TodaysNewsRelatedQA', component: TodaysNewsRelatedQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA', component: AncientIndianHistoryQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/StoneAgeQA', component: StoneAgeQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/ChalcolithicFarmingCulturesQA', component: ChalcolithicFarmingCulturesQAComponent },
  { path: 'GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA/HarappanCultureBronzeAgeCivilizationQA', component: HarappanCultureBronzeAgeCivilizationQAComponent },  
  { path: '', redirectTo: '/GeneralAwarenessQA/HistoryQA/AncientIndianHistoryQA', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }