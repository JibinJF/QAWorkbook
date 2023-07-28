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
import { JainismAndBuddhismAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/jainism-and-buddhism-age-qa/jainism-and-buddhism-age-qa.component';
import { AgeOfMahajanapadasQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/age-of-mahajanapadasQA/age-of-mahajanapadas-qa.component';
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
import { NotForProfitCompaniesAndTrustsQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-and-trusts-qa/not-for-profit-companies-and-trusts-qa.component';
import { FATFQAComponent } from './general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/fatfqa/fatfqa.component';
import { ILOQAComponent } from './general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/iloqa/iloqa.component';
import { EMGFQAComponent } from './general-awareness-qa/political-science-qa/international-institutions-and-agencies-qa/emgfqa/emgfqa.component';
import { FSDCQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/regulatory-authorities-qa/fsdcqa/fsdcqa.component';
import { NCFEQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/not-for-profit-companies-and-trusts-qa/ncfeqa/ncfeqa.component';
import { PoliciesAndStrategiesQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/policies-and-strategies-qa.component';
import { NSFEQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/policies-and-strategies-qa/nsfeqa/nsfeqa.component';
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
import { MauryaAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/maurya-age-qa/maurya-age-qa.component';
import { AllInOneQAComponent } from './general-awareness-qa/facts-qa/all-in-one-qa/all-in-one-qa.component';
import { EuropeanPenetrationAndConquestQAComponent } from './general-awareness-qa/history-qa/modern-indian-history-qa/european-penetration-and-conquest-qa/european-penetration-and-conquest-qa.component';
import { PhysicalGeographyQAComponent } from './general-awareness-qa/geography-qa/physical-geography-qa/physical-geography-qa.component';
import { EarthOriginAndEvolutionQAComponent } from './general-awareness-qa/geography-qa/physical-geography-qa/earth-origin-and-evolution-qa/earth-origin-and-evolution-qa.component';
import { EarthInteriorQAComponent } from './general-awareness-qa/geography-qa/physical-geography-qa/earth-interior-qa/earth-interior-qa.component';
import { CentralAsianInfluenceQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/central-asian-influence-qa/central-asian-influence-qa.component';
import { SatavahanasQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/satavahanas-qa/satavahanas-qa.component';
import { DawnOfHistoryInSouthIndia } from './general-awareness-qa/history-qa/ancient-indian-history-qa/dawn-of-history-in-south-india-qa/dawn-of-history-in-south-india-qa.component';
import { PostMauryaCraftsTradeAndTownsQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/post-maurya-crafts-trade-and-towns-qa/post-maurya-crafts-trade-and-towns-qa.component';
import { GuptaAgeQAComponent } from './general-awareness-qa/history-qa/ancient-indian-history-qa/gupta-age-qa/gupta-age-qa.component';
import { IntroductionAndFeaturesQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/introduction-and-features-qa/introduction-and-features-qa.component';
import { ConstitutionalHistoryQAComponent } from './general-awareness-qa/political-science-qa/indian-polity-qa/indian-constitution-qa/constitutional-history-qa/constitutional-history-qa.component';

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
  { path: 'GeographyQA/PhysicalGeographyQA', component: PhysicalGeographyQAComponent },
  { path: 'GeographyQA/PhysicalGeographyQA/EarthOriginAndEvolutionQA', component: EarthOriginAndEvolutionQAComponent },
  { path: 'GeographyQA/PhysicalGeographyQA/EarthInteriorQA', component: EarthInteriorQAComponent },
  { path: 'HistoryQA', component: HistoryQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA', component: AncientIndianHistoryQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/StoneAgeQA', component: StoneAgeQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/ChalcolithicAgeQA', component: ChalcolithicAgeQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/BronzeAgeAndHarappanCivilizationQA', component: BronzeAgeAndHarappanCivilizationQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/VedicAgeQA', component: VedicAgeQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/JainismAndBuddhismAgeQA', component: JainismAndBuddhismAgeQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/AgeOfMahajanapadasQA', component: AgeOfMahajanapadasQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/MauryaAgeQA', component: MauryaAgeQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/CentralAsianInfluenceQA', component: CentralAsianInfluenceQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/ScienceAndCivilizationLegacyQA', component: ScienceAndCivilizationLegacyQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/SatavahanasQA', component: SatavahanasQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/DawnOfHistoryInSouthIndiaQA', component: DawnOfHistoryInSouthIndia },
  { path: 'HistoryQA/AncientIndianHistoryQA/PostMauryaCraftsTradeAndTownsQA', component: PostMauryaCraftsTradeAndTownsQAComponent },
  { path: 'HistoryQA/AncientIndianHistoryQA/GuptaAgeQA', component: GuptaAgeQAComponent },
  { path: 'HistoryQA/ModernIndianHistoryQA', component: ModernIndianHistoryQAComponent },
  { path: 'HistoryQA/ModernIndianHistoryQA/EighteenthCenturyIndiaQA', component: EighteenthCenturyIndiaQAComponent },
  { path: 'HistoryQA/ModernIndianHistoryQA/EuropeanPenetrationAndConquestQA', component: EuropeanPenetrationAndConquestQAComponent },
  { path: 'PoliticalScienceQA', component: PoliticalScienceQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA', component: IndianPolityQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA', component: IndianConstitutionQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/FundamentalRightsQA', component: FundamentalRightsQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/IntroductionAndFeaturesQA', component: IntroductionAndFeaturesQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/ConstitutionalHistoryQA', component: ConstitutionalHistoryQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/IndianConstitutionQA/DPSPQA', component: DPSPQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/RegulatoryAuthoritiesQA', component: RegulatoryAuthoritiesQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/RegulatoryAuthoritiesQA/FSDCQA', component: FSDCQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesAndTrustsQA', component: NotForProfitCompaniesAndTrustsQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/NotForProfitCompaniesAndTrustsQA/NCFEQA', component: NCFEQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/PoliciesAndStrategiesQA', component: PoliciesAndStrategiesQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/PoliciesAndStrategiesQA/NSFEQA', component: NSFEQAComponent },
  { path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA', component: InternationalInstitutionsAndAgenciesQAComponent },
  { path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/FATFQA', component: FATFQAComponent },
  { path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/EMGFQA', component: EMGFQAComponent },
  { path: 'PoliticalScienceQA/InternationalInstitutionsAndAgenciesQA/ILOQA', component: ILOQAComponent },
  { path: 'PoliticalScienceQA/InternationalAgreementsAndGroupingsQA', component: InternationalAgreementsAndGroupingsQAComponent },
  { path: 'PoliticalScienceQA/OtherCountriesRulesAndDevelopmentsQA', component: OtherCountriesRulesAndDevelopmentsQAComponent },
  { path: 'PoliticalScienceQA/OtherCountriesRulesAndDevelopmentsQA/UnitedStatesOfAmericaQA', component: UnitedStatesOfAmericaQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/OrganizationsAssociationsAndMovementsQA', component: OrganizationsAssociationsAndMovementsQAComponent },
  { path: 'PoliticalScienceQA/IndianPolityQA/OrganizationsAssociationsAndMovementsQA/AllIndiaKisanSabhaQA', component: AllIndiaKisanSabhaQAComponent },
  { path: 'FactsQA', component: FactsQAComponent },
  { path: 'FactsQA/BooksAndAuthorsQA', component: BooksAndAuthorsQAComponent },
  { path: 'FactsQA/AllInOneQA', component: AllInOneQAComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }