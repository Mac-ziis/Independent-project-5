import SolarAge from '../src/js/solar-age.js';

describe('SolarAge', () => {
  test('Should calculate your age in Mercury years', () => {
    const calculator = new SolarAge(56);
    expect(calculator.calculateMercuryAge())toBeCloseTo(233.33, 2);
  });
});