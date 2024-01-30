import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height, isPortrait) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      height: isPortrait ? height * 0.18 : height * 0.085,
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    drawerImage: {
      resizeMode: 'center',
      height: isPortrait ? height * 0.11 : height * 0.06,
      width: isPortrait ? height * 0.1 : height * 0.06,
      marginLeft: isPortrait ? width * 0 : width * 0.01,
    },
    cartImage: {
      resizeMode: 'contain',
      height: isPortrait ? height * 0.35 : height * 0.2,
      width: isPortrait ? height * 0.35 : height * 0.2,
    },
  });
};

export default style;
