import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './News.styles';

import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../redux/detailsSlice'

const News = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.details)

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const showNews = async (url) => {
    await Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.trendingNews}>Trending News</Text>
      {
        news.length > 0 ?
          news.map(({id, source,imgURL, title, link}) => (
            <TouchableOpacity key={id} style={styles.bodyContainer} onPress={() => showNews(link)}>
                <Image style={styles.image} source={{uri:imgURL}} />
                <View style={styles.body}>
              <Text numberOfLines={2} style={styles.title}>{title}</Text>
              <Text style={styles.source}>{source}</Text>
              </View>
            </TouchableOpacity>
          ))
          :<></>
      }
    </View>
  );
};

export default News;
