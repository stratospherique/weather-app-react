import weatherDataActions from './weatherDataActions';
import * as Types from './actionTypes';

// SelectedDayIndex reducer actions
export const changeSelectedDayIndex = (index) => (dispatch) => {
  dispatch({
    type: Types.CHANGE_SELECTED_DAY_INDEX,
    index: typeof index === 'number' ? index : 0
  });
};

// tempUnit reducer actions
const tempUnitActions = {
  convertTempToCelcius: () => (dispatch) => {
    dispatch({
      type: Types.CONVERT_TEMP_TO_CELCIUS
    });
  },
  convertTempToFahrenheit: () => (dispatch) => {
    dispatch({
      type: Types.CONVERT_TEMP_TO_FAHRENHEIT
    });
  }
};

export { weatherDataActions, tempUnitActions };
