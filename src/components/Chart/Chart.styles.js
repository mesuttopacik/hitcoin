import {StyleSheet} from 'react-native';
import { colors } from '../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    margin: 10,
    fontSize: 12,
    flex: 1,
    backgroundColor: colors.ContentBackground,
  },
  tooltip: {
    backgroundColor: colors.pathColor,
    borderRadius: 4,
    padding: 4,
    borderColor:colors.cursorColor,
    borderWidth:1,
  },
});
