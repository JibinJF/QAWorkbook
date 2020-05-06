import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodaysNewsRelatedQAComponent } from './DailyNewsRelatedQA/todays-news-related-qa/todays-news-related-qa.component';

const routes: Routes = [
  { path: 'TodaysNewsRelatedQA', component: TodaysNewsRelatedQAComponent },
  { path: '', redirectTo: '/TodaysNewsRelatedQA', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }