import {Dimensions} from 'react-native';

export const colors = {
  primary: 'white',
  accent: '#333533',

  slightText: '#d6d6d6',

  shadowColor: '#000',

  background: '#eaf4f4',
  ContentBackground: 'white',

  borderColor: '#333533',

  cursorColor:'hotpink',
  pathColor:'#fad2e1',

  danger: 'red',
  success: 'green',
};
const deviceSize = Dimensions.get('window');

export const sizes = {
  windowWidth: deviceSize.width,
  windowHeight: deviceSize.height,
  marginVertical: 10,
};
