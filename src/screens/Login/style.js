import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (height, width) =>
  StyleSheet.create({
    container: {
      height: height,
      width: width,
      flex: 1,
    },
    headerImage: {
      height: height * 0.25,
      width: width,
      resizeMode: 'cover',
    },
    scrollView: {
      // flex: 1,
      backgroundColor: colors.white,
      marginTop: -height * 0.16,
      borderTopRightRadius: width * 0.055,
      borderTopLeftRadius: width * 0.055,
      padding: width * 0.035,
      overflow: 'hidden',
    },
    logoText: {
      color: '#111',
      fontSize: 35,
      fontFamily: 'Poppins-SemiBold',
    },
    signInText: {
      textAlign: 'center',
      fontSize: 15,
      fontFamily: 'Lato-Medium',
      marginVertical: 8,
      marginBottom: 10,
    },

    dashedLineContainer: {marginVertical: 15},
    overflow: {overflow: 'hidden'},
    dashedLine: {
      borderStyle: 'dashed',
      borderWidth: 2,
      borderColor: 'grey',
      margin: -2,
      marginBottom: 0,
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: -12,
      backgroundColor: colors.white,
      width: 110,
    },
    dashedText: {
      textAlign: 'center',
      fontSize: 14,
      color: colors.black_level_3,
      fontFamily: 'Lato-Medium',
      // marginHorizontal: 134,
    },
    footer: {
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.secondaryGreen,

      // marginBottom: 0,
    },
    footerText: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.black_level_3,
      paddingBottom: 6,
    },
  });

export default style;
