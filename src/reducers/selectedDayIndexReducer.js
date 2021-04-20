import * as Types from 'actions/actionTypes';

const selectedDayIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case Types.CHANGE_SELECTED_DAY_INDEX:
      return action.index;
    default:
      return state;
  }
};

export default selectedDayIndexReducer;
