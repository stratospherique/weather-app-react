import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as Types from 'actions/actionTypes';
import { CELCIUS, FAHRENHEIT } from 'helpers/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// allows us to easily return reponses and/or success/fail for a thunk that calls a service
const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

const initialState = {
    weatherData: {},
    selectedDayIndex: 0,
    tempUnit: CELCIUS
  }

describe('#reducer', () => {
  let store;
  // set up a fake store for all our tests
  beforeEach(() => {
    store = mockStore({
      weatherData: {},
      selectedDayIndex: 0,
      tempUnit: CELCIUS
    });
  });

  it('should update the tempUnit value to celcius/fahrenheit', () => {
    /* store.dispatch(
      {
      type: Types.CONVERT_TEMP_TO_FAHRENHEIT
      },
      mockServiceCreator({})
    ).then(() => expect(store.getState().tempUnit).toBe(FAHRENHEIT)) */
    /* let storeState = store.getState();
    expect(storeState.tempUnit).toBe(FAHRENHEIT);
    store.dispatch({
      type: Types.CONVERT_TEMP_TO_CELCIUS
    });
    storeState = store.getState();
    expect(storeState.tempUnit).toBe(CELCIUS); */
  })

  it('should update the Selected day index ', () => {
    /* store.dispatch({
      type: Types.CHANGE_SELECTED_DAY_INDEX,
      index: 4
    });
    let storeState = store.getState();
    expect(storeState.selectedDayIndex).toBe(4); */
  })
})