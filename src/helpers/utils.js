import Humidity from 'assets/img/icons/humidity.png';
import Pressure from 'assets/img/icons/gauge.png';
import Temperature from 'assets/img/icons/thermometer.png';

const {
  CELCIUS,
  FAHRENHEIT,
  HUMIDITY,
  PRESSURE
} = require('./constants');

export const convertTemperature = (value, unit) => {
  switch (unit) {
    case CELCIUS:
      return Math.floor(value - 273.15);
    case FAHRENHEIT:
      return Math.floor((value - 273.15) * (9 / 5)) + 32;
    default:
      return value;
  }
};

export const tempFormatter = {
  [CELCIUS]: {
    name: CELCIUS,
    unit: '°C',
    icon: Temperature
  },
  [FAHRENHEIT]: {
    name: FAHRENHEIT,
    unit: '°F',
    icon: Temperature
  },
  [HUMIDITY]: {
    name: HUMIDITY,
    unit: '%',
    icon: Humidity
  },
  [PRESSURE]: {
    name: PRESSURE,
    unit: 'hPa',
    icon: Pressure
  }
};
