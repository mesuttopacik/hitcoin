import { CandlestickChart } from 'react-native-wagmi-charts';
import { View, Text, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
// import { ActivityIndicator } from 'react-native'
import styles from './Chart.styles'
import { sizes } from '../../constants/GlobalStyles';
// import Error from '../Error';
import axios from 'axios';


const expData = [
  {
    timestamp: 1625945400000,
    open: 33575.25,
    high: 33600.52,
    low: 33475.12,
    close: 33520.11,
  },
  {
    timestamp: 1625946300000,
    open: 33545.25,
    high: 33560.52,
    low: 33510.12,
    close: 33520.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
    {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
];


const Chart = ({coinName}) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

 const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(`https://api.coinstats.app/public/v1/charts?period=1m&coinId=ethereum`);
      // setData(responseData.chart);
      console.log(responseData.chart)
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };


  // console.log(data)
// if (error) {
//     return <Error err={error} />
// }
// if(loading) {
//     return < ActivityIndicator size='large' />
// }
// console.log(coinName)
return (
  <View
  style={styles.container}>
    <Button title='getData' onPress={fetchData} />
  <CandlestickChart.Provider data={expData}>
  <CandlestickChart width={sizes.windowWidth*0.95}>
    <CandlestickChart.Candles positiveColor="hotpink" negativeColor="black" />
    <CandlestickChart.Crosshair color="hotpink" />
  </CandlestickChart>
</CandlestickChart.Provider>
</View>
)
}

export default Chart