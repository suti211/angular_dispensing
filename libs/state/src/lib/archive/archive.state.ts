import {State} from '@ngxs/store';
import {ArchiveStateModel} from './archive-state-model';
import {Injectable} from '@angular/core';

@State<ArchiveStateModel>({
  name: 'archives',
  defaults: {
    entries: [
      {
        id: '22345676789796452',
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
      },
      {
        id: '32345676789796452',
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
        status: 'APPROVED',
        publishedAt: new Date(),
        concludedAt: new Date(),
        rejectReason: 'szar az egész'
      },
      {
        id: '42345676789796452',
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
      },
      {
        id: '52345676789796452',
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
      },
      {
        id: '62345676789796452',
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
        status: 'APPROVED',
        publishedAt: new Date(),
        concludedAt: new Date(),
        rejectReason: 'szar az egész'
      }
    ]
  }
})
@Injectable()
export class ArchiveState {

}
