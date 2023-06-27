import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NxWelcomeComponent} from './nx-welcome.component';
import {BusinessModule, Review, ReviewService} from '@angular-dispensing/business';
import {Subscription} from 'rxjs';
import {FormatWithMeasurementUnitPipe} from './measurement-unit-formatter.pipe';
import {FormatWithSignPipe} from './format-with-sign.pipe';
import {DecimalPipe} from '@angular/common';
import {UiModule} from '@angular-dispensing/ui';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    BusinessModule,
    FormatWithMeasurementUnitPipe,
    FormatWithSignPipe,
    DecimalPipe,
    UiModule
  ],
  selector: 'angular-dispensing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReviewService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {

  private readonly test = (review: Review) => {
    this._review = review;
    console.log(review);
  }

  private _review?: Review;
  private currentReview?: Subscription;

  public constructor(private readonly reviewService: ReviewService) {
  }

  public ngOnDestroy(): void {
    this.currentReview?.unsubscribe();
  }

  // public get reviewId(): ReviewId {
  //   return this._review?.id;
  // }
  //
  // public get demán(): Observable<ReviewId> {
  //
  // }

  public klikk = () => {
    this.currentReview = this.reviewService.showNext().subscribe(this.test);
  }
}
