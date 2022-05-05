import {StyleSheet} from 'react-native';
import { colors, sizes } from '../../constants/GlobalStyles';

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
    color:colors.accent
  },
  bodyInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  priceChange1hBase: {
    marginRight: sizes.marginVertical,
    flexDirection: 'row',
    padding: 3,
    opacity: 0.9,
    fontWeight: 'bold',
  },
  priceChange1hP: {
    color: colors.success,
  },
  priceChange1hC: {
    color: colors.danger,
  },
  price: {
    marginLeft: sizes.marginVertical,
    color:colors.accent
  },
  image: {
    marginRight: sizes.marginVertical,
    height: 30,
    width: 30,
  },
});
