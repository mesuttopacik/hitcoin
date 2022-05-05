import { LineChart} from 'react-native-wagmi-charts';
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
// import { ActivityIndicator } from 'react-native'
import styles from './Chart.styles';
import {colors, sizes} from '../../constants/GlobalStyles';
// import Error from '../Error';
import axios from 'axios';


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
          <LineChart.Path color={colors.pathColor} />
          <LineChart.CursorCrosshair color={colors.cursorColor} />
          <LineChart.Tooltip cursorGutter={60} xGutter={16} yGutter={16} 
          style={styles.tooltip}/>
        </LineChart>
      </LineChart.Provider>
    </View>
  );
};

export default Chart;
