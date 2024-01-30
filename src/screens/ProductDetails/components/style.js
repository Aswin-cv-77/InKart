import {StyleSheet} from 'react-native';
import colors from '../../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    titleText: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.black,
      marginBottom: 6,
    },
    contentText: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.black_level_3,
      lineHeight: 20,
    },
    headText: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.black,
      marginBottom: 6,
    },
    commonText: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.black_level_2,
      lineHeight: 25,
    },
  });

export default style;
