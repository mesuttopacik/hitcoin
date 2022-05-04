import {CandlestickChart, LineChart} from 'react-native-wagmi-charts';
import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
// import { ActivityIndicator } from 'react-native'
import styles from './Chart.styles';
import {sizes} from '../../constants/GlobalStyles';
// import Error from '../Error';
import axios from 'axios';

const expData = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625946300000,
    value: 33545.25,
  },
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625947200000,
    value: 33510.25,
  },

  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
];

const Chart = ({coinName}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(
        `https://api.coinstats.app/public/v1/charts?period=6m&coinId=${coinName}`,
      );
      const formatedData = await responseData.chart.map((item)=> ({timestamp:item[0], value:item[1]}));

      setData(formatedData);
    
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
console.log(data)


  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data)

  // if(loading) {
  //     return < ActivityIndicator size='large' />
  // }
  // console.log(coinName)
  return (
    <View style={styles.container}>
      <LineChart.Provider data={data}>
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
