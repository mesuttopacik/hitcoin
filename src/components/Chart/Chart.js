import { LineChart } from 'react-native-wagmi-charts';
import {View,} from 'react-native';
import React, {useEffect} from 'react';
// import { ActivityIndicator } from 'react-native'
import styles from './Chart.styles';
import {sizes} from '../../constants/GlobalStyles';
// import Error from '../Error';

import { useDispatch, useSelector } from 'react-redux'
import { fetchHistoricalData } from '../../redux/coinDetailsSlice'

const Chart = ({coinName}) => {
  const dispatch = useDispatch();
  const { historicalData } = useSelector((state) => state.coinDetails)

  useEffect(() => {
    dispatch(fetchHistoricalData('24h',coinName));
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
    </View>
  );
};

export default Chart;