import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  featuresContainer: {
    marginTop:65,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth:1,
    boderColor:'#d1d1d1',
    marginHorizontal:10,
  },
  secondInnerBody: {
    marginRight: 10,
  },
  priceContainer: {
    marginRight: 10,
  },
  title: {
    fontWeight: '700',
  },
  price: {
    fontSize: 26,
    fontWeight: '700',
  },
  priceChange1hBase: {
    marginRight: 5,
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
