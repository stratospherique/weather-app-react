import reducer from 'reducers/index';
import * as Types from 'actions/actionTypes';
import { CELCIUS, FAHRENHEIT } from 'helpers/constants';

const initialState = {
  weatherData: {},
  selectedDayIndex: 0,
  tempUnit: CELCIUS
}

describe('#tempUnit Reducer', () => {
  it('should return the default state if not action type is provided', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })
  it('should update the tempUnit to Fahrenheit', () => {
    expect(reducer(initialState, { type: Types.CONVERT_TEMP_TO_FAHRENHEIT })).toEqual({
      ...initialState,
      tempUnit: FAHRENHEIT
    });
  })
  it('should update the tempUnit to Celcius', () => {
    expect(reducer(initialState, { type: Types.CONVERT_TEMP_TO_CELCIUS })).toEqual({
      ...initialState,
      tempUnit: CELCIUS
    });
  })
})

describe('#selectedDayIndex Reducer', () => {
  it('should update the selectedDayIndex to a specific number', () => {
    expect(reducer(initialState, {
      type: Types.CHANGE_SELECTED_DAY_INDEX,
      index: 4
    })).toEqual({
      ...initialState,
      selectedDayIndex: 4
    })
  })
})

describe('#weatherDataReducer', () => {
  it('should return the default state if not action type is provided', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })
})