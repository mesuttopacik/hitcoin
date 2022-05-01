import {Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Coins from './src/screens/Coins';
import Detail from './src/screens/Detail';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Coins"
          component={Coins}
          options={{title: 'Hit Coins'}}
        />
        <Stack.Screen 
        name="Detail" 
        component={Detail}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;