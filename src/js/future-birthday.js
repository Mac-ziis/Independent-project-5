// import SolarAge from './solar-age.js';

export default class FutureBirthday {
  constructor(earth_age) {
    this.earth_age = earth_age;
  }

  yearsToFutureBirthday(future_age) {
    const earthYearsToFuture = future_age - this.earth_age;
    const mercuryYearsToFuture = earthYearsToFuture / 0.24;
    const venusYearsToFuture = earthYearsToFuture / 0.62;
    const marsYearsToFuture = earthYearsToFuture / 1.88;
    const jupiterYearsToFuture = earthYearsToFuture / 11.86;

    return {
      Earth: earthYearsToFuture,
      Mercury: mercuryYearsToFuture,
      Venus: venusYearsToFuture,
      Mars: marsYearsToFuture,
      Jupiter: jupiterYearsToFuture,
    };
  }
}