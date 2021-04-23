import { convertTemperature } from 'helpers/utils';

describe('#convertTemperature', () => {
  it('return a temperature with the same value if not unit is passed', () => {
    expect(convertTemperature(50)).toBe(50);
  });

  it('return a temperature in Celcius', () => {
    expect(convertTemperature(50, 'Celcius')).toBe(Math.floor(50 - 273.15));
  });

  it('return a temperature in Fahrenheit', () => {
    expect(convertTemperature(50, 'Fahrenheit')).toBe(Math.floor((50 - 273.15) * (9 / 5)) + 32);
  });
});