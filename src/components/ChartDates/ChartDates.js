import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ChartDates.styles';

const ChartDates = () => {
  const [timeInterval, setTimeInterval] = React.useState('6m');
  const [activeIndex, setActiveIndex] = React.useState('6m');

  const chartTiming = t => {
    setTimeInterval(t);
    setActiveIndex(t);
  };
  console.log(timeInterval);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={activeIndex === '24h' ? styles.activeButton : styles.button}
        onPress={() => {
          chartTiming('24h');
        }}>
        <Text style={styles.title}>24H</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeIndex === '1w' ? styles.activeButton : styles.button}
        onPress={() => chartTiming('1w')}>
        <Text style={styles.title}>1W</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeIndex === '1m' ? styles.activeButton : styles.button}
        onPress={() => chartTiming('1m')}>
        <Text style={styles.title}>1M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeIndex === '3m' ? styles.activeButton : styles.button}
        onPress={() => chartTiming('3m')}>
        <Text style={styles.title}>3M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeIndex === '6m' ? styles.activeButton : styles.button}
        onPress={() => chartTiming('6m')}>
        <Text style={styles.title}>6M</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChartDates;
