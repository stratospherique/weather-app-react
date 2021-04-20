import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import UnitSwitch from 'components/UnitSwitch';
import UpcommingTemperatures from 'components/UpcommingTemperatures';
import Barchart from 'components/Barchart';
import { bindActionCreators } from 'redux';
import { weatherDataActions } from 'actions';
import styles from './style';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    weatherData: state.weatherData,
    selectedDayIndex: state.selectedDayIndex
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    weatherDataActions,
    dispatch
  )
});

const MainContent = ({
  classes,
  actions,
  weatherData
}) => {
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async () => {
    actions.loadWeatherDataRequest();
    setLoading(true);
    try {
      await actions.loadWeatherData();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (!loading && Object.keys(weatherData).length === 0) {
    return (
      <Grid className={classes.root} container item xs={12} md={10} lg={8}>
        <p>Failed to get Data from API</p>
      </Grid>
    );
  }

  return (
    <Grid className={classes.root} container item xs={12} md={10} lg={8}>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <UnitSwitch />
            <UpcommingTemperatures />
            <Barchart />
          </>
        )
      }
    </Grid>
  );
};

MainContent.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string
  }).isRequired,
  actions: PropTypes.string.isRequired,
  weatherData: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainContent));
