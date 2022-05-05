import {StyleSheet} from 'react-native';
import { colors } from '../../constants/GlobalStyles';


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  button:{
    padding:5,
    borderRadius:10,
    backgroundColor:colors.ContentBackground,
  },
  activeButton:{
    padding:5,
    borderRadius:10,
    backgroundColor:colors.cursorColor,
  },
  title:{
    color:colors.accent,
  },
  
});
