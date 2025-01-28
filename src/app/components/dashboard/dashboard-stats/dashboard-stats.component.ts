import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-stats',
  standalone: true,
  templateUrl: './dashboard-stats.component.html',
  styleUrl: './dashboard-stats.component.scss'
})

export class DashboardStatsComponent {
  @Input() numberOfViews!: number;
  @Input() numberOfReviews!: number;
  @Input() numberOfCheckIns!: number;
}
