import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../components/common/colors';

const style = (height, width) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    container: {
      height: height,
      backgroundColor: colors.white_level_2,
    },
    rowView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    catFlatlist: {
      padding: 10,
      backgroundColor: colors.secondaryGreen,
      // width: width * 0.34,
    },
    catTouch: {
      borderBottomColor: colors.black_level_3,
      borderBottomWidth: 0.8,
    },
    catImage: {
      height: width * 0.2,
      width: width * 0.2,
      resizeMode: 'contain',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backImage: {
      width: width * 0.64,
      height: width * 0.3,
      resizeMode: 'contain',
      alignSelf: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 10,
      padding: 10,
    },
    catName: {
      fontFamily: 'Lato-Black',
      fontSize: 22,
      color: colors.black,
    },
    catDesc: {
      fontFamily: 'Lato-Bold',
      fontSize: 14,
      color: colors.black,
    },
    prodFlatlist: {
      justifyContent: 'center',
      padding: 10,
    },
    prodContainer: {
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    prodImageBg: {
      backgroundColor: colors.secondaryGreen,
      padding: 10,
      justifyContent: 'center',
      borderRadius: 15,
      marginBottom: 5,
    },
    prodImage: {
      height: height * 0.07,
      width: width * 0.14,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    prodName: {
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      color: colors.black,
    },
    prodDesc: {
      fontFamily: 'Lato-Regular',
      fontSize: 14,
      color: colors.black,
    },
  });

export default style;
