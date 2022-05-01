import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CoinCard.styles';

const CoinCard = ({item, onClick}) => {
  const {name, price, priceChange1h, icon} = item;
  const priceFixedValue = Number(price.toFixed(3));

  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <Image style={styles.image} source={{uri: icon}} />
      <View style={styles.bodyContainer}>
        <Text style={styles.coinName}>{name}</Text>
        <View style={styles.bodyInnerContainer}>
          <Text
            style={[
              priceChange1h > 0 ? styles.priceChange1hP : styles.priceChange1hC,
              styles.priceChange1hBase,
            ]}>
            %{priceChange1h}
          </Text>
          <Text style={styles.price}>${priceFixedValue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoinCard;
