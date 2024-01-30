import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (height, width, isPortrait) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.white_level_3,
      padding: 15,
    },
    productView: {
      width: '100%',
      marginRight: 15,
      padding: 15,
      marginBottom: 15,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.primaryGreen,
    },
    productImage: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginVertical: 10,
    },
    textView: {
      borderLeftWidth: 1,
      borderLeftColor: colors.black,
      paddingHorizontal: 10,
      marginLeft: 10,
    },
    headText: {
      fontFamily: 'Lato-Bold',
      color: colors.black,
      fontSize: 20,
    },
    contentText: {
      fontFamily: 'Lato-Regular',
      color: colors.black,
      fontSize: 17,
      marginTop: 2,
    },
    priceView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
      width: width * 0.65,
    },
    priceView2: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    priceText: {
      fontFamily: 'Lato-Bold',
      color: colors.black,
      fontSize: 18,
    },
    offView: {
      borderRadius: 15,
      padding: 5,
      backgroundColor: colors.primaryGreen,
      marginHorizontal: 10,
    },
    offText: {
      color: colors.white,
      fontFamily: 'Lato-Bold',
      fontSize: 15,
      marginHorizontal: 15,
    },
    quanView: {
      flexDirection: 'row',
      padding: 3,
      paddingVertical: 8,
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 15,
      borderWidth: 2,
      borderColor: colors.primaryGreen,
      backgroundColor: colors.greenBg,
    },
    minusPlusText: {
      fontFamily: 'Lato-Black',
      color: colors.black,
      fontSize: 15,
      marginHorizontal: 11,
    },
    countText: {
      fontFamily: 'Lato-Black',
      color: colors.primaryGreen,
      fontSize: 18,
      marginHorizontal: 11,
    },
    container: {
      height: height,
      backgroundColor: colors.white_level_3,
    },
    mainFlatlist: {
      alignSelf: 'center',
      marginVertical: height * 0.01,
    },
    renderView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: width * 1,
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: height * 0.018,
    },
    offCircleView: {
      marginRight: (-height * 0.02) / 2,
      zIndex: 99,
    },
    circleRight: {
      height: 25,
      width: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_level_3,
    },
    circleCenter: {
      height: 25,
      width: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_level_3,
      marginTop: -25 / 2,
    },
  });

export default style;
