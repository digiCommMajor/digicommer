import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importing Angular Material Designs
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';

// import { ProfilecardComponent } from './profilecard/profilecard.component';
// import { HeaderComponent } from './header/header.component';
// import { CarlyComponent } from './carly/carly.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { CarlyProfileComponent } from './carly-profile/carly-profile.component';
import { AbbyProfileComponent } from './abby-profile/abby-profile.component';
import { LindsayProfileComponent } from './lindsay-profile/lindsay-profile.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyCardComponent } from './survey-card/survey-card.component';

@NgModule({
  declarations: [
    AppComponent,
    // ProfilecardComponent,
    // HeaderComponent,
    // CarlyComponent,
    ProfileCardComponent,
    CarlyProfileComponent,
    AbbyProfileComponent,
    LindsayProfileComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SurveyPageComponent,
    SurveyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatRippleModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
