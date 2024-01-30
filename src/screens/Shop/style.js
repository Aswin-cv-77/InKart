import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
      // flex: 1,
      // flexDirection: 'row',
    },
    flatlist: {
      backgroundColor: colors.secondaryGreen,
    },
    contentStyle: {
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    catItemContainer: {
      margin: 10,
    },
    catItemText: {
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      color: colors.darkGreen,
    },
    commonPadding: {
      paddingHorizontal: 10,
    },
    productView: {
      width: '100%',
      marginRight: 15,
      padding: 15,
      marginBottom: 10,
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
      fontSize: 14,
      marginHorizontal: 11,
    },
  });

export default style;
