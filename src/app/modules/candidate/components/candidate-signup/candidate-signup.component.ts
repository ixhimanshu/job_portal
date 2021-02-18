import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-candidate-signup',
  templateUrl: './candidate-signup.component.html',
  styleUrls: ['./candidate-signup.component.scss']
})
export class CandidateSignupComponent implements OnInit {

  constructor(private auth:AuthService,private route: Router) { }

  ngOnInit(): void {
  }

  onSignUp(email,pass){
    this.route.navigate(['../candidate/onboard'])

    console.log(email,pass);
    // this.auth.SignUp(email,pass)
    // .then(res => {
    //   console.log(res);
      
    // })
  }

}
