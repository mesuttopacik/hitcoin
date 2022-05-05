import {View, ActivityIndicator, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Error from '../../components/Error';
import CoinCard from '../../components/CoinCard';

import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins } from '../../redux/listSlice'
import { coinSelected } from '../../redux/detailsSlice'

const Coins = ({navigation}) => {
  const dispatch = useDispatch();
  const { entities, status, error } = useSelector((state) => state.list)

  useEffect(() => {
    dispatch(fetchCoins(entities.length));
  }, []);

  const coinClickHandler = coin => {
    dispatch(coinSelected(coin));
    navigation.navigate('Detail', {coin});
  };

  const renderCoins = ({coin}) => (
    <CoinCard item={coin} onClick={() => coinClickHandler(coin)} />
  );

  if (error) {
    return <Error err={error} />;
  }

  if (status == "loading") {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <FlatList
        data={entities}
        renderItem={renderCoins}
        onEndReachedThreshold={0.2}
        keyExtractor={item => item.id}
        onEndReached={dispatch(fetchCoins(entities.length))}
      />
    </View>
  );
};
export default Coins;
