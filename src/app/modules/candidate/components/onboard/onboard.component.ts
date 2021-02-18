import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  curr_step = 1;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onStep1(){
    this.curr_step++
  }

  getHired(){
    this.route.navigate(['../candidate/opportunities'])
  }

}
