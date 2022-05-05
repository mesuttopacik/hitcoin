import RNBootSplash from 'react-native-bootsplash';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Coins from './src/screens/Coins';
import Detail from './src/screens/Detail';
import { colors } from './src/constants/GlobalStyles';
import HeaderLeft from './src/components/HeaderLeft/HeaderLeft';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator>
        <Stack.Screen
          name="Coins"
          component={Coins}
          options={{title: 'Top Coins',
          headerRight: ()=> <HeaderLeft />,
          headerTintColor:colors.accent,
          headerStyle:{backgroundColor:colors.background}
        }}
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