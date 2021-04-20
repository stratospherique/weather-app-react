import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  IconButton,
  Paper,
  Tooltip
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { formatDayCardData } from 'helpers/formatters';
import { convertTemperature, tempFormatter } from 'helpers/utils';
import { bindActionCreators } from 'redux';
import { changeSelectedDayIndex } from 'actions';

const mapStateToProps = ({ weatherData, tempUnit }) => ({
  weatherData: Object.keys(weatherData).map((k) => ({
    date: k,
    ...formatDayCardData(weatherData[k])
  })),
  tempUnit
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { changeSelectedDayIndex },
    dispatch
  )
});

const style = makeStyles({
  root: {
    width: '33%',
    margin: 8,
    height: 190,
  },
  slider: {
    overflowX: 'hidden',
    display: 'flex',
    width: 'auto',
    flexWrap: 'nowrap',
    maxHeight: '200px',
    overflow: 'hidden',
    outline: '1px solid red',
    '& > *': {
      display: 'inline-block',
      width: '33%'
    }
  }
});

const UpcommingTemperatures = ({ weatherData, tempUnit, actions }) => {
  const [dayIndex, setDayIndex] = useState(0);
  const sliderRef = useRef(null);

  const handlePrevButtonClick = () => {
    if (dayIndex > 0) {
      setDayIndex(dayIndex - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (dayIndex < 5) {
      setDayIndex(dayIndex + 1);
    }
  };

  const handleCardClick = (ind) => {
    actions.changeSelectedDayIndex(ind);
  };

  useEffect(() => {
    console.log('width', sliderRef.current ? sliderRef.current.offsetWidth : 0);
  }, [sliderRef.current]);

  const classes = style();
  return (
    <Grid container item xs={12}>
      <Grid container item xs={12} justify="space-around" alignItems="center">
        <Tooltip title="Scroll Left">
          <IconButton disabled={dayIndex === 0} onClick={handlePrevButtonClick} aria-label="previous">
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Scroll Right">
          <IconButton disabled={dayIndex === 5} onClick={handleNextButtonClick} aria-label="next">
            <ArrowForwardIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={12} ref={sliderRef}>
        <div className={classes.slider}>
          {
            weatherData.map(({
              date,
              avgPressure,
              avgTemp,
              avgHumidity
            }, index) => (
              <Paper elevation={3} key={`item-${date}`} className={classes.root} style={{ width: sliderRef.current ? sliderRef.current.width / 3 : '33%' }} onPointerDown={() => handleCardClick(index)}>
                <p aria-label="date">{date}</p>
                <p aria-label="Pressure">{avgPressure}</p>
                <p aria-label="temperature">{`${convertTemperature(avgTemp, tempUnit)} ${tempFormatter[tempUnit]}`}</p>
                <p aria-label="Humidity">{avgHumidity}</p>
              </Paper>
            ))
          }
        </div>
      </Grid>
    </Grid>
  );
};

UpcommingTemperatures.propTypes = {
  weatherData: PropTypes.object.isRequired,
  tempUnit: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcommingTemperatures);
