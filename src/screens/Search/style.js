import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../components/common/colors';

const {height, width} = Dimensions.get('screen');

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    height: height,
    backgroundColor: colors.white_level_2,
  },
})

export default style;