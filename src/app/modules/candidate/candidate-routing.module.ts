import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate.component';
import { CandidateSignupComponent } from './components/candidate-signup/candidate-signup.component';

const routes: Routes = [
  {
      path: '',
      component: CandidateComponent
  },
  {
    path: 'register',
    component: CandidateSignupComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
