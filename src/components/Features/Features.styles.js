import {StyleSheet, Platform} from 'react-native';
import {colors, sizes} from '../../constants/GlobalStyles';

const marginTop = Platform.OS === 'android' ? 80 : 100;

export default StyleSheet.create({
  featuresContainer: {
    marginTop: marginTop,
    backgroundColor:colors.accent,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginHorizontal: 10,
    borderRadius: 4,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  secondInnerBody: {
    marginRight: sizes.marginVertical,
  },
  priceContainer: {
    marginRight: sizes.marginVertical,
  },
  title: {
    fontSize: 10,
    color: colors.slightText,
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
  },
  values:{
    color: colors.primary,
  },
  priceChange1hBase: {
    flexDirection: 'row',
    fontWeight: '700',
    padding: 3,
    opacity: 0.9,
  },
  priceChange1hP: {
    color: '#2d6a4f',
    fontWeight: 'bold',
  },
  priceChange1hC: {
    color: '#bb3e03',
  },
});
