import { Component, Input } from '@angular/core';
import { Review } from '../../../models/review.model';
import { ReviewItemComponent } from './review-item/review-item.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-activities-reviews',
  standalone: true,
  imports: [ReviewItemComponent, CommonModule],
  templateUrl: './activities-reviews.component.html',
  styleUrl: './activities-reviews.component.scss'
})
export class ActivitiesReviewsComponent {
  @Input() reviews: Review[] = [];
}
