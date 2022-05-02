import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Header.styles'
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const backIcon = <Icon name="arrow-left" size={30} color="#dddddd" />;


const Header = ({name,symbol}) => {
  const navigation = useNavigation();
  const goBackHandler = () =>{
navigation.navigate('Coins')
  }
  return (
    <View style = {styles.container} >
      <TouchableOpacity onPress={goBackHandler}  style={styles.goBack} >
        {backIcon}<Text>Back</Text>
      </TouchableOpacity>
        <Text style={styles.titleMidle}>{name}</Text>
        <Text style={styles.titleRight}>{symbol}/USD</Text>
    </View>
  )
}

export default Header