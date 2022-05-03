import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Header.styles'
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constants/GlobalStyles'



const backIcon = <Icon name="arrow-left" size={30} color={colors.primary} />;


const Header = ({name,symbol}) => {
  const navigation = useNavigation();
  const goBackHandler = () =>{
navigation.navigate('Coins')
  }
  return (
    <View style = {styles.container} >
      <TouchableOpacity onPress={goBackHandler}  style={styles.goBackContainer} >
        {backIcon}<Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
        <Text style={styles.titleMidle}>{name}</Text>
        <Text style={styles.titleRight}>{symbol}/USD</Text>
    </View>
  )
}

export default Header