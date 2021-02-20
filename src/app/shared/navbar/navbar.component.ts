import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }
  
  ngOnInit(): void {
    this.scrollToBottom();
    this.scrollToTop();
  }

  scrollToBottom(): void {
    document.scrollingElement.scrollTo(0,document.scrollingElement.scrollHeight);
  }

  scrollToTop(): void {
    document.scrollingElement.scrollTo(0,0);
  }

}
