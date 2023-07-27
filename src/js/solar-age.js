
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

  calculateVenusAge() {
    return this.earth_age / SolarAge.VENUS_YEAR_RATIO;
  }

  calculateMarsAge() {
    return this.earth_age / SolarAge.MARS_YEAR_RATIO;
  }

  calculateJupiterAge() {
    return this.earth_age / SolarAge.JUPITER_YEAR_RATIO;
  }

  yearsPassedSinceBirthday(birthday_age) {
    const earthYearsPassed = this.earth_age - birthday_age;
    const mercuryYearsPassed = earthYearsPassed / SolarAge.MERCURY_YEAR_RATIO;
    const venusYearsPassed = earthYearsPassed / SolarAge.VENUS_YEAR_RATIO;
    const marsYearsPassed = earthYearsPassed / SolarAge.MARS_YEAR_RATIO;
    const jupiterYearsPassed = earthYearsPassed / SolarAge.JUPITER_YEAR_RATIO;

    return {
      Earth: earthYearsPassed,
      Mercury: mercuryYearsPassed,
      Venus: venusYearsPassed,
      Mars: marsYearsPassed,
      Jupiter: jupiterYearsPassed,
    };
  }
}