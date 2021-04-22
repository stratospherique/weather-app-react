import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  Grid,
  FormControlLabel,
  RadioGroup,
  Radio,
  withStyles,
  useMediaQuery
} from '@material-ui/core';
// import withStyles from '@material-ui/core/styles/withStyles';
import { useTheme } from '@material-ui/core/styles';
import { tempUnitActions } from 'actions';
import { FAHRENHEIT, CELCIUS } from 'helpers/constants';
import style from './style';

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

const UnitSwitch = ({ tempUnit, actions, classes }) => {
  const [value, setValue] = useState(tempUnit);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

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
    <Grid item container xs={12} className={classes.root} justify="center" alignItems="center">
      <Grid item xs={12} md={8}>
        <RadioGroup row aria-label="Switch temperature unit" name="temperature-switch" className={classes.radioGroup} value={value} onChange={handleRadioChange}>
          <FormControlLabel className={classes.radioLabel} labelPlacement={isMobileView ? 'top' : 'end'} value={CELCIUS} control={<Radio />} label="Celcius" checked={value === CELCIUS} />
          <FormControlLabel className={classes.radioLabel} labelPlacement={isMobileView ? 'top' : 'end'} value={FAHRENHEIT} control={<Radio />} label="Fahrenheit" checked={value === FAHRENHEIT} />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

UnitSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
  tempUnit: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(UnitSwitch));
