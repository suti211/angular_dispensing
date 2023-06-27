import {Pipe, PipeTransform} from '@angular/core';

export type MeasurementUnit = 'DEGREES' | 'NONE';

@Pipe({
  name: 'formatWithMeasurementUnit',
  standalone: true,
})
export class FormatWithMeasurementUnitPipe implements PipeTransform {
  public transform(value: string | undefined, unitOfMeasurement?: MeasurementUnit | undefined): string | undefined {
    if (value == undefined)
      return '-';

    if (!unitOfMeasurement)
      return value;

    let unitSymbol: string;

    switch (unitOfMeasurement) {
      case 'DEGREES':
        unitSymbol = ' °';
        break;
      default:
        unitSymbol = '';
        break;
    }

    return `${value}${unitSymbol}`;
  }
}
