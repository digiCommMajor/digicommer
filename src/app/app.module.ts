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

import { ProfileCardComponent } from './profile-card/profile-card.component';
import { CarlyProfileComponent } from './carly-profile/carly-profile.component';
import { AbbyProfileComponent } from './abby-profile/abby-profile.component';
import { LindsayProfileComponent } from './lindsay-profile/lindsay-profile.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyCardComponent } from './survey-card/survey-card.component';
import { MatGridListModule } from '@angular/material/grid-list';

import { ResultAComponent } from './result-a/result-a.component';
import { ResultBComponent } from './result-b/result-b.component';
import { ResultCComponent } from './result-c/result-c.component';
import { CarouselComponent } from './carousel/carousel.component';

// Imports for Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB-XO6AHi0oBiHpovlpam48QpH4vyh8cbQ",
  authDomain: "digicommer-69795.firebaseapp.com",
  projectId: "digicommer-69795",
  storageBucket: "digicommer-69795.appspot.com",
  messagingSenderId: "718403866001",
  appId: "1:718403866001:web:1aa1da1f9a298608315e30",
  measurementId: "G-3D9N1R955W"
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    CarlyProfileComponent,
    AbbyProfileComponent,
    LindsayProfileComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SurveyPageComponent,
    SurveyCardComponent,
    ResultAComponent,
    ResultBComponent,
    ResultCComponent,
    CarouselComponent,
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
    MatGridListModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
