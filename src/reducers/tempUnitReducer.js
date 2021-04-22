import { FAHRENHEIT, CELCIUS } from 'helpers/constants';
import * as Types from 'actions/actionTypes';

const tempUnitReducer = (state = CELCIUS, action) => {
  switch (action.type) {
    case Types.CONVERT_TEMP_TO_CELCIUS:
      return CELCIUS;
    case Types.CONVERT_TEMP_TO_FAHRENHEIT:
      return FAHRENHEIT;
    default:
      return state;
  }
};

export default tempUnitReducer;
