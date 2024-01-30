import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height) =>
  StyleSheet.create({
    mainContainer: {
      padding: width * 0.045,
      // paddingBottom: 50,
      backgroundColor: colors.white,
    },
    innerView: {
      width: 170,
      height: 275,
      marginRight: 15,
      padding: 15,
      marginVertical: 15,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.primaryGreen,
    },
    wishlistImage: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
      alignSelf: 'flex-end',
    },
    itemImage: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginVertical: 10,
    },
    nameText: {
      fontFamily: 'Lato-Bold',
      color: colors.black,
      fontSize: 20,
    },
    descText: {
      fontFamily: 'Lato-Regular',
      color: colors.black,
      fontSize: 17,
      marginTop: 2,
    },
    bottomView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    priceText: {
      fontFamily: 'Lato-Regular',
      color: colors.black,
      fontSize: 20,
    },
    plusView: {
      backgroundColor: colors.primaryGreen,
      paddingVertical: 3,
      paddingHorizontal: 5,
      borderRadius: 3,
    },
    plusText: {
      fontFamily: 'Lato-Bold',
      color: colors.white,
      fontSize: 20,
    },
  });

export default style;
