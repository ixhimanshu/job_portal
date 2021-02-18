import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate.component';
import { CandidateSignupComponent } from './components/candidate-signup/candidate-signup.component';
import { OnboardComponent } from './components/onboard/onboard.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';

const routes: Routes = [
  {
      path: '',
      component: CandidateComponent
  },
  {
    path: 'register',
    component: CandidateSignupComponent
  },
  {
    path: 'onboard',
    component: OnboardComponent
  },
  {
    path: 'opportunities',
    component: OpportunitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
