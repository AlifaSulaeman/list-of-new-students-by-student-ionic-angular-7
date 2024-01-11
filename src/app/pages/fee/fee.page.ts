import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.page.html',
  styleUrls: ['./fee.page.scss'],
})
export class FeePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToFeePage() {
    console.log('Navigating to Fee Page');
    this.router.navigate(['/status']);
  }
}
