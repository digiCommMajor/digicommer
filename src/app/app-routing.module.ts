import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { CarlyProfileComponent } from './carly-profile/carly-profile.component';
import { AbbyProfileComponent } from './abby-profile/abby-profile.component';
import { LindsayProfileComponent } from './lindsay-profile/lindsay-profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  // ---------PATHS-- Written By:Abby Leon -----------------

  //home
  { path: '', component: HomeComponent },

  { path: 'abby-profile', component: AbbyProfileComponent },
  { path: 'carly-profile', component: CarlyProfileComponent },
  { path: 'lindsay-profile', component: LindsayProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
