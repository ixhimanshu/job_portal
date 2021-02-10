import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './modules/landingpage/landingpage.component';

const routes: Routes = [
  {path: '', component: LandingpageComponent, pathMatch:"full"},
  { path: 'candidate', loadChildren: () => import(`./modules/candidate/candidate.module`).then(m => m.CandidateModule) },
  { path: 'login', loadChildren: () => import(`./modules/login/login.module`).then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
