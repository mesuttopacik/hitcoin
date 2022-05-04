import {StyleSheet} from 'react-native';
import { colors, sizes } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    margin: sizes.marginVertical,
  },
  trendingNews: {
    color:colors.primary,
    fontSize: 20,
    marginBottom:10,
    fontWeight:'600'
  },
  con: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    width: 70,
    height: 70,
    marginVertical: 5,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  body: {
    flex: 4,
    paddingLeft: 10,
    paddingTop: 5,
    justifyContent: 'space-evenly',
  },
  title: {
    textAlign: 'justify',
    color:colors.black,
  },
  source: {
    color: colors.slightText,
    textAlign: 'right',
    fontWeight:'600'
  },
});
