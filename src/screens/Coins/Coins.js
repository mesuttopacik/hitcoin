import {View, ActivityIndicator, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Error from '../../components/Error';
import CoinCard from '../../components/CoinCard';

import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins } from '../../redux/listSlice'
import { coinSelected } from '../../redux/detailsSlice'

const Coins = ({navigation}) => {
  const dispatch = useDispatch();
  const { coins, status, error } = useSelector((state) => state.list)
  
  useEffect(() => {
    dispatch(fetchCoins(coins.length));
  }, []);

  const coinClickHandler = coin => {
    dispatch(coinSelected(coin));
    navigation.navigate('Detail', {coin});
  };

  const renderCoins = ({item}) => {
    return (
      <CoinCard item={item} onClick={() => coinClickHandler(item)} />
    )
  };

  if (error) {
    return <Error err={error} />;
  }

  if (status == "loading") {
    return <ActivityIndicator size="large" />;
  }

  const loadMore = () => {
    dispatch(fetchCoins(coins.length));
  };

  return (
    <View>
      <FlatList
        data={coins}
        renderItem={renderCoins}
        onEndReachedThreshold={0.2}
        keyExtractor={item => item.id}
        onEndReached={loadMore}
      />
    </View>
  );
};
export default Coins;
