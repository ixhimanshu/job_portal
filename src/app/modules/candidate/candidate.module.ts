import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateSignupComponent } from './components/candidate-signup/candidate-signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OnboardComponent } from './components/onboard/onboard.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';



@NgModule({
  declarations: [CandidateComponent,CandidateSignupComponent, OnboardComponent, OpportunitiesComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    SharedModule
  ]
})
export class CandidateModule { }
