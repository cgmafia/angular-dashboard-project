import { Review } from "./review.model";
import { Location } from "./location.model";

export interface Dashboard {
  numberOfViews: number;
  numberOfReviews: number;
  numberOfCheckIns: number;
  locations: Location[];
  reviews: Review[]
}
