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
      Mars: 2.6595744680851063,
      Jupiter: 0.42,
    };

    const yearsToFutureBirthday = futureBirthday.yearsToFutureBirthday(futureAge);
    expect(yearsToFutureBirthday.Earth).toBe(5);
    expect(yearsToFutureBirthday.Mercury).toBeCloseTo(expectedYearsToFutureBirthday.Mercury, 2);
    expect(yearsToFutureBirthday.Venus).toBeCloseTo(expectedYearsToFutureBirthday.Venus, 2);
    expect(yearsToFutureBirthday.Mars).toBe(expectedYearsToFutureBirthday.Mars);
    expect(yearsToFutureBirthday.Jupiter).toBeCloseTo(expectedYearsToFutureBirthday.Jupiter, 2);
  });
})