import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
      height: isPortrait ? height * 0.2 : height * 0.09,
      backgroundColor: colors.primaryGreen,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    footerText: {
      color: colors.white,
      fontFamily: 'Lato-Bold',
      fontSize: 16,
    },
    iconView: {
      // justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      resizeMode: 'contain',
      height: isPortrait ? height * 0.07 : height * 0.035,
      width: isPortrait ? height * 0.07 : height * 0.035,
      marginBottom: isPortrait ? height * 0.015 : height * 0.002,
    },
    dot: {
      // resizeMode: 'contain',
      height: isPortrait ? height * 0.03 : height * 0.045,
      width: isPortrait ? height * 0.08 : height * 0.045,
      marginTop: height * 0.01,
      marginTop: isPortrait ? height * 0.01 : height * -0.015,
      marginBottom: isPortrait ? height * 0 : height * -0.015,
    },
    cartCountView: {
      position: 'absolute',
      right: -1,
      top: -2,
      backgroundColor: colors.red,
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      paddingHorizontal: 4,
      paddingVertical: 1,
      zIndex: 9,
    },
    cartCount: {
      fontFamily: 'Lato-Bold',
      fontSize: 15,
      color: colors.white,
      textAlign: 'center',
    },
  });

export default style;
