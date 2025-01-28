import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRountingModule } from './app-rounting/app-rounting.module'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DashboardStatsComponent } from './components/dashboard/dashboard-stats/dashboard-stats.component';
import { GeographicDataComponent } from './components/dashboard/geographic-data/geographic-data.component';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ActivitiesReviewsComponent } from './components/dashboard/activities-reviews/activities-reviews.component';
import { ReviewItemComponent } from './components/dashboard/activities-reviews/review-item/review-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    DashboardStatsComponent,
    GeographicDataComponent,
    ActivitiesReviewsComponent,
    ReviewItemComponent,
    HeaderComponent,
    DashboardStatsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRountingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    // NgxChartsModule,
    AppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
