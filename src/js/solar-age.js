
export default class SolarAge {
  constructor(earth_age) {
    this.earth_age = earth_age;
  }

  calculateMercuryAge() {
    return this.earth_age / 0.24;
  }

  calculateVenusAge() {
    return this.earth_age / 0.62;
  }

  calculateMarsAge() {
    return this.earth_age / 1.88;
  }

  calculateJupiterAge() {
    return this.earth_age / 11.86;
  }

  yearsPassedSinceBirthday(birthday_age) {
    const earthYearsPassed = this.earth_age - birthday_age;
    const mercuryYearsPassed = earthYearsPassed / 0.24;
    const venusYearsPassed = earthYearsPassed / 0.62;
    const marsYearsPassed = earthYearsPassed / 1.88;
    const jupiterYearsPassed = earthYearsPassed / 11.86;

    return {
      Earth: earthYearsPassed,
      Mercury: mercuryYearsPassed,
      Venus: venusYearsPassed,
      Mars: marsYearsPassed,
      Jupiter: jupiterYearsPassed,
    };
  }
}
