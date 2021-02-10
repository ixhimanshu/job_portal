import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateNavbarComponent } from './components/candidate-navbar/candidate-navbar.component';
import { CandidateFooterComponent } from './components/candidate-footer/candidate-footer.component';
import { CandidateSignupComponent } from './components/candidate-signup/candidate-signup.component';



@NgModule({
  declarations: [CandidateComponent, CandidateNavbarComponent, CandidateFooterComponent, CandidateSignupComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ]
})
export class CandidateModule { }
