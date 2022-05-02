import {View, Text, Dimensions, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Detail.styles';
import Chart from '../../components/Chart';
import Features from '../../components/Features/Features';
import Header from '../../components/Header';
import News from '../../components/News';

const Detail = ({route}) => {
  const {
    name,
    price,
    marketCap,
    symbol,
    availableSupply,
    totalSupply,
    priceChange1d,
    priceChange1h,
  } = route.params.el;
  return (
    <View style={styles.container}>
      <Header name={name} symbol={symbol} />
      <ScrollView>
        <Features
          price={price}
          marketCap={marketCap}
          symbol={symbol}
          availableSupply={availableSupply}
          totalSupply={totalSupply}
          priceChange1d={priceChange1d}
          priceChange1h={priceChange1h}
        />

        <View>
          <Chart />
        </View>

        <News />
      </ScrollView>
    </View>
  );
};

export default Detail;
