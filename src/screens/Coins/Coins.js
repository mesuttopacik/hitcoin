import {View, ActivityIndicator, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Error from '../../components/Error';
import CoinCard from '../../components/CoinCard';
import axios from 'axios';

const Coins = ({navigation}) => {

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [coinList, setCoinList] = useState([]);


  fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(
        `https://api.coinstats.app/public/v1/coins?skip=${coinList.length}&limit=30`,
      );
      setCoinList([...coinList,...responseData.coins])
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const coinDetailHandler = el => {
    navigation.navigate('Detail', {el});
  };
  const renderCoins = ({item}) => (
    <CoinCard item={item} onClick={() => coinDetailHandler(item)} />
  );

  const loadMore = () => {
    fetchData()
  };


  if (error) {
    return <Error err={error} />;
  }
  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View>
      <FlatList
        data={coinList}
        renderItem={renderCoins}
        onEndReachedThreshold={0.2}
        keyExtractor={item => item.id}
        onEndReached={loadMore}
      />
    </View>
  );
};
export default Coins;
