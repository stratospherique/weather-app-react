import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as Types from 'actions/actionTypes';
import * as actions from 'actions';
import { CELCIUS, FAHRENHEIT } from 'helpers/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// allows us to easily return reponses and/or success/fail for a thunk that calls a service
const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

describe('action creators', () => {
  let store;
  // set up a fake store for all our tests
  beforeEach(() => {
    store = mockStore({
      weatherData: {},
      selectedDayIndex: 0,
      tempUnit: CELCIUS
    });
  });

  describe('#tempUnitActions', () => {
    it('should return action of type convert to fahrenheit', () => {
      store.dispatch(actions.tempUnitActions.convertTempToFahrenheit());
      expect(store.getActions()).toContainEqual({ type: Types.CONVERT_TEMP_TO_FAHRENHEIT });
    });
  
    it('should return action of type convert to celcuis', () => {
      store.dispatch(actions.tempUnitActions.convertTempToCelcius());
      expect(store.getActions()).toContainEqual({ type: Types.CONVERT_TEMP_TO_CELCIUS });
    });
  })

  describe('#changeSelectedDayIndex', () => {
    it('should return action of type change selected day index', () => {
      store.dispatch(actions.changeSelectedDayIndex(4));
      expect(store.getActions()).toContainEqual({ type: Types.CHANGE_SELECTED_DAY_INDEX, index: 4 });
    });
  });
})