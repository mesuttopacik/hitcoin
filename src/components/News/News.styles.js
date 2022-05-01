import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  trendingNews: {
    fontSize: 23,
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
    paddingRight: 5,
  },
  source: {
    textAlign: 'right',
    fontWeight:'600'
  },
});
