import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style = (width, height) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: colors.secondaryGreen,
      margin: 10,
      borderRadius: 18,
    },
    recentContainer: {
      backgroundColor: colors.white,
      borderRadius: 18,
      margin: 8,
      paddingVertical: 10,
    },
    bannerImage: {
      resizeMode: 'contain',
      height: height * 0.1,
      width: width * 0.1,
      overflow: 'hidden',
      //   marginLeft: 5,
    },
    headText: {
      fontSize: 18,
      fontFamily: 'Lato-Bold',
      marginTop: 12,
      marginLeft: 10,
      color: colors.black,
    },
  });
};

export default style;
