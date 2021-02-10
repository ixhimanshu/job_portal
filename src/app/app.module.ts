import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './modules/landingpage/landingpage.component';
import { MainNavbarComponent } from './modules/landingpage/components/main-navbar/main-navbar.component';
import { MainFooterComponent } from './modules/landingpage/components/main-footer/main-footer.component';
import { firebaseConfig } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    MainNavbarComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    MainNavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
