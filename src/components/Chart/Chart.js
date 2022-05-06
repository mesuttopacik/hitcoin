import { LineChart } from 'react-native-wagmi-charts';
import {View,} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Chart.styles';
import {sizes} from '../../constants/GlobalStyles';
import ChartDates from '../ChartDates/ChartDates';

import { useDispatch, useSelector } from 'react-redux'
import { fetchHistoricalData } from '../../redux/detailsSlice'
import { fetchHistoricalDataFromApi } from '../../services/coinProvider'

const Chart = () => {
  const { selectedCoin } = useSelector((state) => state.details);
  const [historicalData, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (period) => {
    const response = await fetchHistoricalDataFromApi(period == null ? "24h" : period, selectedCoin.id);
    const formatedData = await response.chart.map((item)=> ({timestamp:item[0], value:item[1]}));
    setData(formatedData);
  };

  const onChartPeriodChange = async (value) => {
    await fetchData(value);
  };

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
      <ChartDates onSelect={onChartPeriodChange}/>
    </View>
  );
};

export default Chart;