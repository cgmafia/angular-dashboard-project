import { Component, Input } from '@angular/core';
import { Review } from '../../../../models/review.model';
@Component({
  selector: 'app-review-item',
  standalone: true,
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.scss'
})
export class ReviewItemComponent {
  @Input() review!: Review;
}
