import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  IconButton,
  Tooltip,
  withStyles
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { connect } from 'react-redux';
import { formatDayCardData } from 'helpers/formatters';
import { bindActionCreators } from 'redux';
import { changeSelectedDayIndex } from 'actions';
import style from './style';
import Card from './Card';

const mapStateToProps = ({ weatherData, tempUnit, selectedDayIndex }) => ({
  weatherData: Object.keys(weatherData).map((k) => ({
    date: k,
    ...formatDayCardData(weatherData[k])
  })),
  tempUnit,
  selectedDayIndex
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { changeSelectedDayIndex },
    dispatch
  )
});

const UpcommingTemperatures = ({
  weatherData,
  tempUnit,
  actions,
  classes,
  selectedDayIndex
}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const sliderRef = useRef(null);

  const handlePrevButtonClick = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (pageIndex < 2) {
      setPageIndex(pageIndex + 1);
    }
  };

  // To prevent unnecessary rerendering
  const handleCardClick = useRef((ind) => {
    actions.changeSelectedDayIndex(ind);
  });

  const scrollPages = (sliderElement) => {
    const card = document.querySelector(`#card-${pageIndex}`);
    sliderElement.scrollTo({
      left: card.offsetLeft - card.parentElement.offsetLeft,
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (sliderRef.current) {
      scrollPages(sliderRef.current);
    }
  }, [pageIndex]);

  useEffect(() => {
    console.log('width', sliderRef.current ? sliderRef.current.offsetWidth : 0);
  }, [sliderRef.current]);

  return (
    <Grid container item xs={12} md={9}>
      <Grid container item xs={12} justify="space-around" alignItems="center" style={{ marginBottom: 16 }}>
        <Tooltip title="Scroll Left">
          <IconButton style={{ backgroundColor: '#fff' }} color="secondary" disabled={pageIndex === 0} onClick={handlePrevButtonClick} aria-label="previous">
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Scroll Right">
          <IconButton style={{ backgroundColor: '#fff' }} color="secondary" disabled={pageIndex === 2} onClick={handleNextButtonClick} aria-label="next">
            <ArrowForwardIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.slider} ref={sliderRef}>
          {
            weatherData.map((item, index) => (
              <Card
                key={`item-${item.date}`}
                date={item.date}
                avgPressure={item.avgPressure}
                avgTemp={item.avgTemp}
                avgHumidity={item.avgHumidity}
                tempUnit={tempUnit}
                index={index}
                onCardClick={handleCardClick.current}
                isSelected={selectedDayIndex === index}
              />
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
  actions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  selectedDayIndex: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(UpcommingTemperatures));
