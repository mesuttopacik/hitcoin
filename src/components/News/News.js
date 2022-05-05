import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './News.styles';

import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../redux/detailsSlice'

const News = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.coinDetails)

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.trendingNews}>Trending News</Text>

      {news.map(({id, source,imgURL, title}) => (
          <TouchableOpacity key={id} style={styles.bodyContainer} onPress={()=>console.log('tıklandı')}>
              <Image style={styles.image} source={{uri:imgURL}} />
              <View style={styles.body}>
            <Text numberOfLines={2} style={styles.title}>{title}</Text>
            <Text style={styles.source}>{source}</Text>
            </View>
          </TouchableOpacity>
      ))}
    </View>
  );
};

export default News;
