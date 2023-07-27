import SolarAge from './solar-age.js';

export default class FutureBirthday {
  constructor(earth_age) {
    this.earth_age = earth_age;
  }

  yearsToFutureBirthday(future_age) {
    const earthYearsToFuture = future_age - this.earth_age;
    const mercuryYearsToFuture = earthYearsToFuture / SolarAge.MERCURY_YEAR_RATIO;
    const venusYearsToFuture = earthYearsToFuture / SolarAge.VENUS_YEAR_RATIO;
    const marsYearsToFuture = earthYearsToFuture / SolarAge.MARS_YEAR_RATIO;
    const jupiterYearsToFuture = earthYearsToFuture / SolarAge.JUPITER_YEAR_RATIO;

    return {
      Earth: earthYearsToFuture,
      Mercury: mercuryYearsToFuture,
      Venus: venusYearsToFuture,
      Mars: marsYearsToFuture,
      Jupiter: jupiterYearsToFuture,
    };
  }
}