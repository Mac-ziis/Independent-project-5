import SolarAge from '../src/js/solar-age.js';

describe('SolarAge', () => {
  test('Should calculate your age in Mercury years', () => {
    const calculator = new SolarAge(56);
    expect(calculator.calculateMercuryAge()).toBeCloseTo(233.33, 2);
  });

  test('Should calculate your age in Venus years', () => {
    const calculator = new SolarAge(56);
    expect(calculator.calculateVenusAge()).toBeCloseTo(90.32, 2);
  });

  test('Should calculate your age in Mars years', () => {
    const calculator = new SolarAge(56);
    expect(calculator.calculateMarsAge()).toBeCloseTo(29.79, 2);
  });

  test('Should caclculate your age in Jupiter years', () => {
    const calculator = new SolarAge(56);
    expect(calculator.calculateJupiterAge()).toBeCloseTo(4.72, 2);
  });

  test('Should calculate years passed since birthday on each planet', () => {
    const calculator = new SolarAge(56);
    const birthdayAge = 43;
    const expectedYearsPassed = {
      Earth: 13,
      Mercury: 54.17,
      Venus: 20.97,
      Mars: 6.91,
      Jupiter: 1.10,
    };

    const yearsPassed = calculator.yearsPassedSinceBirthday(birthdayAge);
    expect(yearsPassed.Earth).toEqual(13);
    expect(yearsPassed.Mercury).toBeCloseTo(expectedYearsPassed.Mercury, 2);
    expect(yearsPassed.Venus).toBeCloseTo(expectedYearsPassed.Venus, 2);
    expect(yearsPassed.Mars).toBeCloseTo(expectedYearsPassed.Mars, 2);
    expect(yearsPassed.Jupiter).toBeCloseTo(expectedYearsPassed.Jupiter, 2);
  });
});