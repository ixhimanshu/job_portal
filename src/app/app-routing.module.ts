import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './modules/landingpage/landingpage.component';

const routes: Routes = [
  {path: '', component: LandingpageComponent},
  { path: 'candidate', loadChildren: () => import(`./modules/candidate/candidate.module`).then(m => m.CandidateModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
