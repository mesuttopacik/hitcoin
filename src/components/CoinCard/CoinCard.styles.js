import {StyleSheet} from 'react-native';
import { colors } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 10,
  },
  bodyContainer: {
    flex: 1,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinName: {
    flex: 1,
    fontWeight: '600',
    color:colors.black
  },
  bodyInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  priceChange1hBase: {
    marginRight: 5,
    flexDirection: 'row',
    padding: 3,
    opacity: 0.9,
  },
  priceChange1hP: {
    marginLeft: 10,
    color: '#2d6a4f',
    fontWeight: 'bold',
  },
  priceChange1hC: {
    marginLeft: 10,
    color: '#bb3e03',
    fontWeight: 'bold',
  },
  price: {
    marginLeft: 10,
    color:colors.black
  },
  image: {
    marginRight: 10,
    height: 30,
    width: 30,
  },
});
