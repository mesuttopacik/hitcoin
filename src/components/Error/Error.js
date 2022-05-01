import { View, Text } from 'react-native'
import React from 'react'
import styles from './Error.styles'


const Error = ({err}) => {
  return (
    <View style = {styles.container}>
        <Text style ={styles.errorMessage}> {err} </Text>
      <Text>Something went Wrong!  Check your internet connection and try again</Text>
      {/* <Text></Text> */}
    </View>
  )
}

export default Error