import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatWithSign',
  standalone: true,
})
export class FormatWithSignPipe implements PipeTransform {
  transform(value: number): string | undefined {
    if (value == undefined)
      return '-';

    let sign = '';

    if (value > 0)
      sign = '+';

    return `${sign}${value}`;
  }
}
