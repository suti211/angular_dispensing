import {FormatWithMeasurementUnitPipe} from './measurement-unit-formatter.pipe';

describe('AxisFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatWithMeasurementUnitPipe();
    expect(pipe).toBeTruthy();
  });
});
