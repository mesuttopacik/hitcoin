import { Image } from 'react-native'
import React from 'react'
import styles from './HeaderLeft.styles'

const HeaderLeft = () => {
  return (
    <Image style={styles.container} source={require('../../../assets/headerLeft.png')} />
  )
}

export default HeaderLeft