import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

  onLogIn(email,pass){
    console.log(email,pass);
    this.auth.SignIn(email,pass)
    .then(res => {
      console.log(res);
      
    })

  }

}
