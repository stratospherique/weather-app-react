import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { formatChartData } from 'helpers/formatters';
import { tempFormatter } from 'helpers/utils';

const mapStateToProps = ({ weatherData, selectedDayIndex, tempUnit }) => ({
  tempData: formatChartData(Object.values(weatherData)[selectedDayIndex], tempUnit),
  tempUnit
});

const Barchart = ({ tempData, tempUnit }) => (
  <Grid item xs={12}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={tempData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="temp" unit={tempFormatter[tempUnit]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="temp" name="Temperature" fill="#82ca9d" unit={tempFormatter[tempUnit]} />
      </BarChart>
    </ResponsiveContainer>
  </Grid>
);

Barchart.propTypes = {
  tempData: PropTypes.object.isRequired,
  tempUnit: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Barchart);
