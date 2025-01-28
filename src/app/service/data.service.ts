import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dashboard } from '../models/dashboard.model';
import { Review } from '../models/review.model';
import { Location } from '../models/location.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    constructor() { }

  getDashboardData(): Observable<Dashboard> {
    const mockDashboardData: Dashboard = {
      numberOfViews: 6452,
      numberOfReviews: 150,
      numberOfCheckIns: 3002,
      locations: [
        { name: 'Stockholm', count: 30 },
        { name: 'Göteborg', count: 25 },
        { name: 'Other', count: 45 },
      ] as Location[],
      reviews: [
        {
          userName: 'Kathryn Murphy',
          userAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
          text: 'In eu do do cillum lorem exercitation ea dolor.'
        },
        {
          userName: 'James Harrid',
          userAvatar: 'https://randomuser.me/api/portraits/men/2.jpg',
          text: 'Deserunt minim indidunt cillum nostrudo voluptate excepteur.'
        },
        {
          userName: 'Elon Melon',
          userAvatar: 'https://randomuser.me/api/portraits/women/3.jpg',
          text: 'Mollit consectetur occaecat et ad adipisicing ex deserunt fugiat.'
        },
          {
              userName: 'Mia Smith',
              userAvatar: 'https://randomuser.me/api/portraits/men/4.jpg',
              text: 'Cupidatat eiusmod tempor labore amet amet proident duis.'
            },
            {
                userName: 'James Doe',
                userAvatar: 'https://randomuser.me/api/portraits/women/5.jpg',
                text: 'Duis excepteur enim enim dolore aliqua officia nisi labore ipsum.'
              }
        ] as Review[],
    }

    return of(mockDashboardData);
  }
}
