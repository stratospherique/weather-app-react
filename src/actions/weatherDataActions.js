import getAll from 'services/openWeatherApi';
import { formatAPIData } from 'helpers/formatters';
import * as Types from './actionTypes';

const WeatherDataActions = (function () {
  function loadWeatherDataRequest() {
    return {
      type: Types.LOAD_WEATHER_DATA_REQUEST
    };
  }

  function loadWeatherDataSuccess(data) {
    return {
      type: Types.LOAD_WEATHER_DATA_SUCCESS,
      data
    };
  }

  function loadWeatherDataFailure() {
    return {
      type: Types.LOAD_WEATHER_DATA_FAILURE
    };
  }

  function loadWeatherData() {
    return async (dispatch) => {
      const response = await getAll();
      if (response.cod === '200') {
        dispatch(loadWeatherDataSuccess(formatAPIData(response.list)));
      } else {
        dispatch(loadWeatherDataFailure());
      }
    };
  }

  return {
    loadWeatherDataSuccess,
    loadWeatherDataRequest,
    loadWeatherData
  };
}());

export default WeatherDataActions;
