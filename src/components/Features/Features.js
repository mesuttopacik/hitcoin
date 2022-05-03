import { View, Text } from 'react-native'
import React from 'react'
import styles from './Features.styles'

const Features = ({price, marketCap, symbol, availableSupply, totalSupply, priceChange1d, priceChange1h}) => {
    const availableSupplyValue = Number(availableSupply.toFixed(2));
    const totalSupplyFixedValue = Number(totalSupply.toFixed(2));
    const priceFixedValue = Number(price.toFixed(2));
    const marketCapFixedValue = Number(marketCap.toFixed(2));

  return (
    <View style={styles.featuresContainer}>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{priceFixedValue}</Text>
                  <Text style={styles.title}>{symbol}/USD</Text>
                  <Text style={[
              priceChange1h > 0 ? styles.priceChange1hP : styles.priceChange1hC,
              styles.priceChange1hBase,
            ]}>%{priceChange1h}</Text>
                </View>
                <View style={styles.secondInnerBody}>
                  <Text style={styles.title}>Market Cap</Text>
                  <Text style = {styles.values}>{marketCapFixedValue}</Text>
                  <Text style={styles.title}>Daily price change</Text>
                  <Text style = {styles.values}>{priceChange1d}</Text>
                </View>  
                <View>
                  <Text style={styles.title}>Avalible Suply</Text>
                  <Text style = {styles.values}>{availableSupplyValue}</Text>
                  <Text style={styles.title}>Total Suply</Text>
                  <Text style = {styles.values}>{totalSupplyFixedValue}</Text>
                </View>  
            </View>
  )
}

export default Features