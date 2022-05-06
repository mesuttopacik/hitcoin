import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ChartDates.styles';
import { useDispatch, useSelector } from 'react-redux'
import { chartPeriodChanged, fetchHistoricalData } from '../../redux/detailsSlice'

const ChartDates = (props) => {
  const dispatch = useDispatch();
  const { chartPeriod } = useSelector((state) => state.details)
  
  const changeChartPeriod = p => {
    dispatch(chartPeriodChanged(p));
    props.onSelect(p);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={chartPeriod === '24h' ? styles.activeButton : styles.button}
        onPress={() => {
          changeChartPeriod('24h');
        }}>
        <Text style={styles.title}>24H</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={chartPeriod === '1w' ? styles.activeButton : styles.button}
        onPress={() => changeChartPeriod('1w')}>
        <Text style={styles.title}>1W</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={chartPeriod === '1m' ? styles.activeButton : styles.button}
        onPress={() => changeChartPeriod('1m')}>
        <Text style={styles.title}>1M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={chartPeriod === '3m' ? styles.activeButton : styles.button}
        onPress={() => changeChartPeriod('3m')}>
        <Text style={styles.title}>3M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={chartPeriod === '6m' ? styles.activeButton : styles.button}
        onPress={() => changeChartPeriod('6m')}>
        <Text style={styles.title}>6M</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChartDates;
