import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './modules/landingpage/landingpage.component';
import { MainNavbarComponent } from './modules/landingpage/components/main-navbar/main-navbar.component';
import { MainFooterComponent } from './modules/landingpage/components/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    MainNavbarComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
