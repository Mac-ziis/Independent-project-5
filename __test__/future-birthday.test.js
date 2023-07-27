import SolarAge from '../src/js/solar-age.js';
import FutureBirthday from '../src/js/future-birthday.js';

describe('FutureBirthday', () => {

  test('Should calculate the years to future birthday on each planet', () => {
    const calculator = new SolarAge(56);
    const futureBirthday = new FutureBirthday(56);
    const futureAge = 61;
    const expectedYearsToFutureBirthday = {
      Earth: 5,
      Mercury: 20.83,
      Venus: 8.06,
      Mars: 2.65,
      Jupiter: 0.42,
    };

    const yearsToFutureBirthday = futureBirthday.yearsToFutureBirthday(futureAge);
    expectedYearsToFutureBirthday(yearsToFutureBirthday).toEqual(expectedYearsToFutureBirthday);
  });
})