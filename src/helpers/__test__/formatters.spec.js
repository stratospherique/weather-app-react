const { formatDayCardData, formatChartData } = require('../formatters');

describe('#formatDayCardData', () => {
  const sampleObjArray = [
    {
      temp: 5,
      humidity: 5,
      pressure: 7
    },
    {
      temp: 10,
      humidity: 20,
      pressure: 66
    },
    {
      temp: 55,
      humidity: 20,
      pressure: 77
    }
  ];

  it('should return the average value of all attributes in a array of objects', () => {
    expect(formatDayCardData(sampleObjArray)).toEqual({
      avgTemp: 23,
      avgPressure: 50,
      avgHumidity: 15
    });
  });

  it('should return null when given an empty array', () => {
    expect(formatDayCardData([])).toBeNull();
  });
});

describe('#formatChartData', () => {
  const sampleObjArray = [
    {
      temp: 5,
      humidity: 5,
      pressure: 7,
      date: '10:00 pm'
    },
    {
      temp: 10,
      humidity: 20,
      pressure: 66,
      date: '10:00 am'
    },
    {
      temp: 55,
      humidity: 20,
      pressure: 77,
      date: '11:00 am'
    }
  ];
  it('should provide valid data (i.e Array of objects {temp: Number, date: string}) for the barchart graph', () => {
    expect(formatChartData(sampleObjArray)).toEqual([
      {
        temp: 5,
        date: '10:00 pm'
      },
      {
        temp: 10,
        date: '10:00 am'
      },
      {
        temp: 55,
        date: '11:00 am'
      }
    ]);
  });
})