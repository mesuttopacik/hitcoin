import { LineChart } from 'react-native-wagmi-charts';
import {View,} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Chart.styles';
import {sizes} from '../../constants/GlobalStyles';
import ChartDates from '../ChartDates/ChartDates';

import { useDispatch, useSelector } from 'react-redux'
import { fetchHistoricalData } from '../../redux/detailsSlice'

const Chart = () => {
  const dispatch = useDispatch();
  const { selectedCoin, historicalData } = useSelector((state) => state.details)

  useEffect(() => {
    dispatch(fetchHistoricalData('24h',selectedCoin.name));
  }, []);

  return (
    <View style={styles.container}>
      <LineChart.Provider data={historicalData}>
        <LineChart
          width={sizes.windowWidth * 0.95}
          height={sizes.windowHeight / 3}>
          <LineChart.Path color="hotpink" />
          <LineChart.CursorCrosshair color='hotpink' />
          <LineChart.Tooltip cursorGutter={60} xGutter={16} yGutter={16} 
          style={styles.tooltip}/>
        </LineChart>
      </LineChart.Provider>
      <ChartDates />
    </View>
  );
};

export default Chart;