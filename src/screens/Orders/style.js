import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (height, width) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    touchContainer: {
      backgroundColor: colors.secondaryGreen,
      overflow: 'hidden',
      padding: 10,
      borderRadius: 15,
      margin: 10,
    },
    innerView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: colors.black_level_3,
      borderBottomWidth: 1,
      paddingBottom: 15,
    },
    idText: {
      fontSize: 16,
      fontFamily: 'Lato-Bold',
      color: colors.black,
    },
    dateText: {
      fontSize: 14,
      fontFamily: 'Lato-Regular',
      color: colors.primaryGreen,
      lineHeight: 18,
    },
    addressText: {
      fontSize: 14,
      fontFamily: 'Lato-Regular',
      color: colors.black_level_3,
      lineHeight: 18,
    },
    paidText: {
      fontSize: 14,
      fontFamily: 'Lato-Regular',
      color: colors.black,
      lineHeight: 18,
    },
    greenText: {
      fontSize: 14,
      fontFamily: 'Lato-Regular',
      color: colors.primaryGreen,
    },
    mapImage: {
      height: 80,
      width: 120,
      borderRadius: 12,
      overflow: 'hidden',
      resizeMode: 'cover',
    },
    bottomView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 15,
    },
    shippedText: {
      fontSize: 14,
      fontFamily: 'Lato-Regular',
      color: colors.black_level_3,
    },
    reviewText: {
      fontSize: 14,
      fontFamily: 'Lato-Regular',
      color: colors.black_level_3,
    },
  });

export default style;
