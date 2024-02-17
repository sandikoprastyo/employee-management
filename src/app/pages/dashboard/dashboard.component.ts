import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  data: any = [
    {
      name: 'Home',
    },
    {
      name: 'Customer',
    },
    {
      name: 'Employee',
    },
    {
      name: 'Report',
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}



}
