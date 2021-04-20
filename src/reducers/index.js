import { combineReducers } from 'redux';
// Reducers
import tempUnitReducer from './tempUnitReducer';
import selectedDayIndexReducer from './selectedDayIndexReducer';
import weatherDataReducer from './weatherDataReducer';

const globalReducer = combineReducers({
  weatherData: weatherDataReducer,
  selectedDayIndex: selectedDayIndexReducer,
  tempUnit: tempUnitReducer
});

export default globalReducer;
