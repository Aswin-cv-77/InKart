import colors from '../../components/common/colors';

const {StyleSheet} = require('react-native');

const style = (height, width, isPortrait) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.white_level_3,
      padding: 10,
    },
    // countView: {
    //   position: 'absolute',
    //   right: 6,
    //   top: -6,
    //   backgroundColor: colors.red,
    //   paddingHorizontal: 5.5,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   borderRadius: 10,
    //   overflow: 'hidden',
    //   zIndex: 9,
    // },
    // countText: {
    //   fontFamily: 'Lato-Regular',
    //   fontSize: 16,
    //   color: colors.white,
    // },
    // cartIcon: {
    //   height: 30,
    //   width: 30,
    //   marginRight: 10,
    //   resizeMode: 'contain',
    // },
    productView: {
      alignSelf: 'center',
      backgroundColor: colors.white,
      borderRadius: 15,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      width: width * 0.93,
      padding: 15,
      marginTop: 15,
    },
    removeView: {
      position: 'absolute',
      top: 10,
      right: 0,
      backgroundColor: colors.red,
      borderRadius: 15,
      overflow: 'hidden',
      padding: 5,
      marginRight: 5,
    },
    remove: {
      height: 20,
      width: 20,
      resizeMode: 'contain',
      marginLeft: 3,
    },
    productImage: {
      height: 65,
      width: 65,
      resizeMode: 'contain',
    },
    secondView: {
      borderLeftColor: colors.gray,
      borderLeftWidth: 1,
      paddingLeft: 10,
      marginLeft: 6,
      width: width * 0.7,
      overflow: 'hidden',
    },
    productText: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      color: colors.black,
    },
    descText: {
      fontFamily: 'Lato-Regular',
      fontSize: 15,
      color: colors.black_level_2,
    },
    bottomView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
    },
    priceText: {
      fontFamily: 'Lato-Bold',
      fontSize: 15,
      color: colors.black,
    },
    offView: {
      borderRadius: 13,
      backgroundColor: colors.primaryGreen,
      padding: 5,
      marginHorizontal: 5,
    },
    offText: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: colors.white,
    },
    cartView: {
      borderRadius: 15,
      borderColor: colors.primaryGreen,
      borderWidth: 1,
      padding: 5,
      marginHorizontal: 5,
    },
    cartText: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: colors.primaryGreen,
    },
  });

export default style;
