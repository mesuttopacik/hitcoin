import {View,  ScrollView} from 'react-native';
import React from 'react';
import styles from './Detail.styles';
import Chart from '../../components/Chart';
import Features from '../../components/Features/Features';
import Header from '../../components/Header';
import News from '../../components/News';

import { useSelector } from 'react-redux'

const Detail = () => {

  const { selectedCoin } = useSelector((state) => state.coinDetails)

  return (
    <View style={styles.container}>
      <Header name={selectedCoin.name} symbol={selectedCoin.symbol} />
      <ScrollView>
        <Features
          price={selectedCoin.price}
          marketCap={selectedCoin.marketCap}
          symbol={selectedCoin.symbol}
          availableSupply={selectedCoin.availableSupply}
          totalSupply={selectedCoin.totalSupply}
          priceChange1d={selectedCoin.priceChange1d}
          priceChange1h={selectedCoin.priceChange1h}
        />

        <View>
          <Chart/>
        </View>

        <News />
      </ScrollView>
    </View>
  );
};

export default Detail;
