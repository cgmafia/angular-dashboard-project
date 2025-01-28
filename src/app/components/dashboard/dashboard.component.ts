import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Dashboard } from '../../models/dashboard.model';
import { GeographicDataComponent } from './geographic-data/geographic-data.component';
import { DashboardStatsComponent } from './dashboard-stats/dashboard-stats.component';
import { ActivitiesReviewsComponent } from './activities-reviews/activities-reviews.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GeographicDataComponent, DashboardStatsComponent, ActivitiesReviewsComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
    dashboardData!: Dashboard;
    loading: boolean = true;
    constructor(private dataService: DataService){}

    ngOnInit(){
        this.dataService.getDashboardData().subscribe({
           next: data => {
              this.dashboardData = data;
              this.loading = false;
           },
           error: error => {
              console.error('Error fetching dashboard data', error)
              this.loading = false;
           }
        })
    }
}
