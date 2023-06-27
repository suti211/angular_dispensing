import {RefractionValues} from './refraction-values';
import {OrderDetail} from './order-detail';

export type ReviewId = string;
export type LensPairId = string;
export type ReviewStatus = 'PUBLISHED' | 'REJECTED' | 'REVOKED' | 'APPROVED';


export type Review = Readonly<{
  id: ReviewId;

  lensPairId: LensPairId;

  leftRxMeasurement: Readonly<RefractionValues>;

  rightRxMeasurement: Readonly<RefractionValues>;

  leftOrderedValues: Readonly<RefractionValues>;

  rightOrderedValues: Readonly<RefractionValues>;

  orderAttributes: Readonly<OrderDetail>;

  status: ReviewStatus;

  publishedAt: Date;

  concludedAt: Date;

  rejectReason: string;
}>
