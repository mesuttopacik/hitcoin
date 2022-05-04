import {View, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import CoinCard from '../../components/CoinCard';

const Coins = ({navigation}) => {
    const {
        error,
        data: coinsData,
        loading,
      } = useFetch(
        'https://api.coinstats.app/public/v1/coins?skip=0&limit=30'
      );
const coinDetailHandler = (el) =>{
navigation.navigate('Detail', {el})
}
    const renderCoins = ({item}) => (<CoinCard item = {item} onClick={()=>coinDetailHandler(item)} />)
    if (error) {
        return <Error err={error} />
    }
    if(loading) {
        return < ActivityIndicator size='large' />
    }
  return (
    <View>
      <FlatList
      data={coinsData.coins}
      renderItem={renderCoins}
      />
    </View>
  );
  }
export default Coins;
