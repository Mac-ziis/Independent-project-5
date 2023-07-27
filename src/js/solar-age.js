
export default class SolarAge {
  static MERCURY_YEAR_RATIO = 0.24;
  static VENUS_YEAR_RATIO = 0.62;
  static MARS_YEAR_RATIO = 1.88;
  static JUPITER_YEAR_RATIO = 11.86;

  constructor(earth_age) {
    this.earth_age = earth_age;
  }

  calculateMercuryAge() {
    return this.earth_age / SolarAge.MERCURY_YEAR_RATIO;
  }
}