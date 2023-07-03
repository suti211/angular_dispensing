import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Review, ReviewService} from '@angular-dispensing/business';
import {Subscription} from 'rxjs';
import {FormatWithSignPipe} from '../format-with-sign.pipe';
import {FormatWithMeasurementUnitPipe} from '../measurement-unit-formatter.pipe';
import {UiModule} from '@angular-dispensing/ui';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'angular-dispensing-table',
  standalone: true,
  imports: [
    CommonModule,
    FormatWithSignPipe,
    FormatWithMeasurementUnitPipe,
    UiModule,
    RouterModule
  ],
  providers: [ReviewService],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  private readonly test = (review: Review[]) => {
    this._review = review;
    console.log(review);
  }

  private _review?: Review[];
  private currentReview?: Subscription;

  public constructor(private readonly reviewService: ReviewService) {
  }

  public ngOnInit(): void {
    this.currentReview = this.reviewService.showAuditEntries().subscribe(this.test);
  }

  public ngOnDestroy(): void {
    this.currentReview?.unsubscribe();
  }

  public get auditEntries(): Review[] | undefined {
    return this._review;
  }
}
