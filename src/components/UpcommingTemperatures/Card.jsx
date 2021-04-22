import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  withStyles,
  Typography
} from '@material-ui/core';
import { convertTemperature, tempFormatter } from 'helpers/utils';
import WeatherData from 'components/common/WeatherData';
import { HUMIDITY, PRESSURE } from 'helpers/constants';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import style from './style';

const CardItem = ({
  date,
  avgHumidity,
  avgPressure,
  avgTemp,
  tempUnit,
  onCardClick,
  index,
  classes,
  isSelected
}) => (
  <Card elevation={3} className={classes.card} id={`card-${index}`} onPointerDown={() => onCardClick(index)}>
    <div className={classes.cardContent}>
      <CalendarTodayIcon fontSize="small" style={{ margin: 4 }} color="secondary" />
      <Typography aria-label="date" variant="h1" color="textSecondary" className={classes.cardTitle}>
        {date}
      </Typography>
      <div className={isSelected ? classes.selectedIndicator : null} />
      <div className={classes.iconsContainer}>
        <WeatherData label="Pressure" value={avgPressure} unit={PRESSURE} />
        <WeatherData
          label="Temperature"
          value={convertTemperature(avgTemp, tempFormatter[tempUnit].name)}
          unit={tempFormatter[tempUnit].name}
        />
        <WeatherData label="Humidity" value={avgHumidity} unit={HUMIDITY} />
      </div>
    </div>
  </Card>
);

CardItem.propTypes = {
  avgTemp: PropTypes.number.isRequired,
  avgPressure: PropTypes.number.isRequired,
  avgHumidity: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  tempUnit: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(memo(CardItem));
