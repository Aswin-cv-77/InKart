import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
      //   backgroundColor: colors.white,
      //   paddingBottom: 30,
    },
    heartView: {
      position: 'absolute',
      right: 10,
      marginTop: 10,
    },
    prodImage: {
      height: height * 0.3,
      width: width,
      resizeMode: 'contain',
      marginVertical: 20,
    },
    mainView: {
      backgroundColor: colors.white,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      shadowColor: colors.black,
      shadowOpacity: 0.2,
      shadowOffset: {width: 2, height: 2},
      shadowRadius: 5,
      elevation: 15,
      paddingBottom: 80,
    },
    padding: {
      padding: width * 0.045,
    },
    nameText: {
      fontFamily: 'Lato-Black',
      fontSize: 28,
      color: colors.black,
      marginBottom: 5,
    },
    ratingView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 2,
    },
    ratingText: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.gray,
      marginLeft: 8,
    },
    priceText: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      color: colors.black,
      //   marginTop: 8,
    },
    prodDetailsView: {
      borderBottomWidth: 1,
      borderBottomColor: colors.greenGlow,
      paddingVertical: 10,
    },
    prodDetailsText: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.black,
      marginBottom: 6,
    },
    descText: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.black_level_2,
    },
  });

export default style;
