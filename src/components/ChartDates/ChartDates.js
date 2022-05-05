import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ChartDates.styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchHistoricalData } from '../../redux/coinDetailsSlice'

const ChartDates = ({coinName, currentChartPeriod}) => {

  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = React.useState('24h');
  
  const chartTiming = t => {
    dispatch(fetchHistoricalData(t,coinName));
    setActiveIndex(t);
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={currentChartPeriod === '24h' ? styles.activeButton : styles.button}
        onPress={() => {
          chartTiming('24h');
        }}>
        <Text style={styles.title}>24H</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={currentChartPeriod === '1w' ? styles.activeButton : styles.button}
        onPress={() => chartTiming('1w')}>
        <Text style={styles.title}>1W</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={currentChartPeriod === '1m' ? styles.activeButton : styles.button}
        onPress={() => chartTiming('1m')}>
        <Text style={styles.title}>1M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={currentChartPeriod === '3m' ? styles.activeButton : styles.button}
        onPress={() => chartTiming('3m')}>
        <Text style={styles.title}>3M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={currentChartPeriod === '6m' ? styles.activeButton : styles.button}
        onPress={() => chartTiming('6m')}>
        <Text style={styles.title}>6M</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChartDates;
