const { CELCIUS, FAHRENHEIT } = require('./constants');

export const convertTemperature = (value, unit) => {
  switch (unit) {
    case CELCIUS:
      return Math.floor(value - 273.15);
    case FAHRENHEIT:
      return Math.floor((value - 273.15) * (9 / 5) + 32);
    default:
      return value;
  }
};

export const tempFormatter = {
  [CELCIUS]: '°C',
  [FAHRENHEIT]: '°F'
};
