type Diopter = number;
type Degree = number;

export interface RefractionValuesModel {
  sphericalMeasurement: Diopter;
  cylindricalMeasurement: Diopter;
  axialMeasurement: Degree;
}
