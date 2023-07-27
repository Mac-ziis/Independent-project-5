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
    expect(calculator.calculateJupiterYears()).toBeCloseTo(4.72, 2);
  });
});