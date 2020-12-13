import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { CarlyProfileComponent } from './carly-profile/carly-profile.component';
import { AbbyProfileComponent } from './abby-profile/abby-profile.component';
import { LindsayProfileComponent } from './lindsay-profile/lindsay-profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SurveyCardComponent } from './survey-card/survey-card.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { ResultAComponent } from './result-a/result-a.component';
import { ResultBComponent } from './result-b/result-b.component';
import { ResultCComponent } from './result-c/result-c.component';

const routes: Routes = [
  // ---------PATHS-- Written By:Abby Leon -----------------

  //home
  { path: '', component: HomeComponent },

  { path: 'abby-profile', component: AbbyProfileComponent },
  { path: 'carly-profile', component: CarlyProfileComponent },
  { path: 'lindsay-profile', component: LindsayProfileComponent },
  { path: 'survey-page', component: SurveyPageComponent },
  { path: 'survey-card', component: SurveyCardComponent },
  { path: 'result-a', component: ResultAComponent },
  { path: 'result-b', component: ResultBComponent },
  { path: 'result-c', component: ResultCComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
