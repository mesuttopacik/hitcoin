import {View, Text, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './News.styles';
import useFetch from '../../hooks/useFetch';
import Error from '../Error';

const News = () => {
  const {
    error,
    data: newsData,
    loading,
  } = useFetch(
    'https://api.coinstats.app/public/v1/news/trending?skip=0&limit=5',
  );

  const {news} = newsData;

  if (error) {
    return <Error err={error} />;
  }
  if (loading) {
    return <ActivityIndicator size="large" />;
  }
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
