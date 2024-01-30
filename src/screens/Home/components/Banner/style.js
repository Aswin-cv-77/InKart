import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style = (width, height, isPortrait) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.grey,
    },
    flatlist: {
      padding: 10,
      // backgroundColor: colors.greenBg,
      backgroundColor: colors.secondaryGreen,
    },
    bannerImage: {
      resizeMode: 'contain',
      height: isPortrait ? height * 0.47 : width * 0.47,
      width: isPortrait ? width * 0.47 : height * 0.47,
      overflow: 'hidden',
      borderRadius: 15,
      marginLeft: 5,
      marginRight: 15,
      borderWidth: 2,
      borderColor: colors.greenGlow,
    },
    headText: {
      fontSize: 18,
      fontFamily: 'Lato-Black',
      marginBottom: 5,
      marginLeft: 8,
      marginTop: 50,
      color: colors.black,
    },
    contentText: {
      fontSize: 13,
      fontFamily: 'Lato-Bold',
      marginLeft: 8,
      color: colors.black,
    },
    shopNowContainer: {
      paddingHorizontal: 15,
      paddingVertical: 9,
      width: '36%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor: colors.primaryGreen,
      marginTop: 8,
      marginLeft: 8,
    },
    shopNowText: {
      color: colors.white,
      fontFamily: 'Lato-Bold',
      fontSize: 15,
      // paddingHorizontal: 10,
    },
  });
};

export default style;
