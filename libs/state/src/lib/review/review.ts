import {OrderDetailsModel} from './order-details-model';
import {RefractionValuesModel} from './refraction-values-model';

type ReviewIdModel = string;
type LensPairIdModel = string;
type ReviewStatusModel = 'PUBLISHED' | 'REJECTED' | 'REVOKED' | 'APPROVED';

type Review = Readonly<{
  id: ReviewIdModel;

  lensPairId: LensPairIdModel;

  leftRxMeasurement: Readonly<RefractionValuesModel>;

  rightRxMeasurement: Readonly<RefractionValuesModel>;

  leftOrderedValues: Readonly<RefractionValuesModel>;

  rightOrderedValues: Readonly<RefractionValuesModel>;

  orderAttributes: Readonly<OrderDetailsModel>;

  status: ReviewStatusModel;

  publishedAt: Date;

  concludedAt: Date;

  rejectReason: string;
}>

interface ReviewStateModel {
  lockedItem?: Review;
}

export {Review, ReviewStateModel};
