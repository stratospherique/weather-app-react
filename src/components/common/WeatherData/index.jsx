import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import { tempFormatter } from 'helpers/utils';
import style from './style';

const WeatherData = ({
  label,
  value,
  unit,
  classes
}) => (
  <div className={classes.root}>
    <img src={tempFormatter[unit].icon} alt="weather Icon" className={classes.icon} />
    <Typography variant="span" aria-label={label} className={classes.info} color="primary">
      {`${value}${tempFormatter[unit].unit}`}
    </Typography>
  </div>
);

WeatherData.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(memo(WeatherData));
