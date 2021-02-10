import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-candidate-signup',
  templateUrl: './candidate-signup.component.html',
  styleUrls: ['./candidate-signup.component.scss']
})
export class CandidateSignupComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSignUp(email,pass){
    console.log(email,pass);
    this.auth.SignUp(email,pass)
    .then(res => {
      console.log(res);
      
    })
  }

}
