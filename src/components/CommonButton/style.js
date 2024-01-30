import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (height, width, isPortrait) =>
  StyleSheet.create({
    mainContainer: {
      borderRadius: 15,
      backgroundColor: colors.primaryGreen,
      padding: 12,
      width: width * 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      // marginVertical: 2,
    },
    text: {
      fontFamily: 'Lato-Bold',
      color: colors.white,
      fontSize: 15,
    },
  });

export default style;
