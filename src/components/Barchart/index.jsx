import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
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

const Barchart = ({ tempData, tempUnit }) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid item xs={11} md={9} style={{ height: 300, marginTop: 20 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={tempData}
          margin={{
            top: 5,
            right: 30,
            left: -35,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="temp" unit={tempFormatter[tempUnit]} visibility="hidden" />
          <Tooltip labelStyle={{ color: '#183A5A' }} itemStyle={{ color: '#183A5A' }} />
          <Legend />
          <Bar dataKey="temp" name="Temperature" fill="#F0F8FF" unit={tempFormatter[tempUnit].unit} barSize={isMobileView ? 20 : 30} />
        </BarChart>
      </ResponsiveContainer>
    </Grid>
  );
};

Barchart.propTypes = {
  tempData: PropTypes.array.isRequired,
  tempUnit: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(memo(Barchart));
