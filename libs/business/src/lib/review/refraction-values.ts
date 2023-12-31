type Diopter = number;
type Degree = number;

export interface RefractionValues {
  sphericalMeasurement: Diopter;
  cylindricalMeasurement: Diopter;
  axialMeasurement: Degree;
}
