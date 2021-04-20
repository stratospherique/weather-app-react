import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  Grid,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@material-ui/core';
// import withStyles from '@material-ui/core/styles/withStyles';
// import { makeStyles } from '@material-ui/core/styles';
import { tempUnitActions } from 'actions';
import { FAHRENHEIT, CELCIUS } from 'helpers/constants';

/* const style = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}); */

const mapStateToProps = (state) => {
  const { tempUnit } = state;
  return {
    tempUnit
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    tempUnitActions,
    dispatch
  )
});

const UnitSwitch = ({ tempUnit, actions }) => {
  const [value, setValue] = useState(tempUnit);

  const handleRadioChange = (event) => {
    const unitValue = event.target.value;
    if (unitValue === CELCIUS) {
      actions.convertTempToCelcius();
    } else if (unitValue === FAHRENHEIT) {
      actions.convertTempToFahrenheit();
    }
    setValue(unitValue);
  };

  return (
    <Grid item container xs={12} justify="center" alignItems="center">
      <Grid item xs={12} md={8}>
        <FormLabel component="legend">Temperature Units</FormLabel>
        <RadioGroup row aria-label="temperature-switch" name="temperature-switch" value={value} onChange={handleRadioChange}>
          <FormControlLabel value={CELCIUS} control={<Radio />} label="Celcius" checked={value === CELCIUS} />
          <FormControlLabel value={FAHRENHEIT} control={<Radio />} label="Fahrenheit" checked={value === FAHRENHEIT} />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

UnitSwitch.propTypes = {
  classes: PropTypes.shape({
    radioGroup: PropTypes.string
  }).isRequired,
  tempUnit: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitSwitch);
