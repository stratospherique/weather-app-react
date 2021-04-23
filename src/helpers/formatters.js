import moment from 'moment';
import { convertTemperature } from './utils';

// return an object that has date as keys and weather data array for each date as values
export const formatAPIData = (payload, segNum = 40, daysNum = 5) => {
  if (segNum % daysNum !== 0) return null;
  const todayDate = moment();
  const dataPerDays = new Map();
  for (let i = 0; i < segNum; i += 1) {
    const date = moment(payload[i].dt_txt);
    if (date.isBetween(todayDate.format('YYYY MM DD'), moment().add(daysNum, 'd').format('YYYY MM DD'))) {
      const dateKey = date.format('MM/DD');
      const item = {
        date: date.format('hh:mm a'),
        temp: payload[i].main.temp,
        humidity: payload[i].main.humidity,
        pressure: payload[i].main.pressure
        // description: payload[i].weather[0].description
        // icon: `http://openweathermap.org/img/wn/${payload[i].weather[0].icon}@2x.png`
      };
      if (dataPerDays.has(dateKey)) {
        dataPerDays.set(dateKey, [...dataPerDays.get(dateKey), item]);
      } else {
        dataPerDays.set(dateKey, [item]);
      }
    }
  }
  const obj = {};
  dataPerDays.forEach((v, k) => {
    obj[k] = v;
  });
  return obj;
};

function attributeAverage(arr, attr) {
  if (typeof attr !== 'string') return null;
  return Math.floor(arr.reduce((prev, curr) => prev + curr[attr], 0) / arr.length);
}

/*
  assuming that each object has the following format
  {
    temp: number,
    humidity: number,
    pressure: number,
    description: string
  }
*/
export const formatDayCardData = (arr) => {
  if (arr && arr.length === 0) return null;
  return {
    avgTemp: attributeAverage(arr, 'temp'),
    avgPressure: attributeAverage(arr, 'pressure'),
    avgHumidity: attributeAverage(arr, 'humidity')
  };
};

/*
  assuming that each object has the following format
  {
    temp: number,
    humidity: number,
    pressure: number,
    description: string
  }
*/
export function formatChartData(weatherDataArray, unit) {
  return weatherDataArray.map(({ temp, date }) => ({
    temp: convertTemperature(temp, unit),
    date
  }));
}
