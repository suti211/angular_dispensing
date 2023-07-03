import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Review} from './review';
import {Store} from '@ngxs/store';
import {GlobalState} from '@angular-dispensing/state';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  public constructor(private readonly store: Store) {

  }

  // public showNextFromState(): Observable<Review> {
  //   const lockedItem$ = this.store.select(state => state.lockedItem);
  //   return this.store.dispatch(new FetchNextReview());
  // }

  public showAuditEntries(): Observable<Array<Review>> {
    return this.store.select((state: GlobalState) => state.archives.entries);
  }

  public showNext(): Observable<Review> {
    return of({
      id: '12345676789796452',
      lensPairId: '16204469',
      leftRxMeasurement: {
        sphericalMeasurement: 1.0,
        cylindricalMeasurement: 2.0,
        axialMeasurement: 90
      },
      rightRxMeasurement: {
        sphericalMeasurement: 1.0,
        cylindricalMeasurement: 2.0,
        axialMeasurement: 90
      },
      leftOrderedValues: {
        sphericalMeasurement: 1.1,
        cylindricalMeasurement: 2.2,
        axialMeasurement: 0
      },
      rightOrderedValues: {
        sphericalMeasurement: 1.3,
        cylindricalMeasurement: 2.1,
        axialMeasurement: 180
      },
      orderAttributes: {
        id: '16204469',
        serialNumber: 'AXNBB7620XN',
        leftOpc: '123asd987',
        rightOpc: '123asd986',
      },
      status: 'REJECTED',
      publishedAt: new Date(),
      concludedAt: new Date(),
      rejectReason: 'szar az egész'
    });
  }
}
