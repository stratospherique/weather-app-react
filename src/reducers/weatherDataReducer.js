import * as Types from 'actions/actionTypes';

const weatherDataReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.LOAD_WEATHER_DATA_SUCCESS:
      return { ...action.data };
    default:
      return state;
  }
};

export default weatherDataReducer;
