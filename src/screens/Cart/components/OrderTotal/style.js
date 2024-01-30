import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // marginVertical: 15,
      borderBottomColor: colors.black_level_3,
      borderBottomWidth: 1,
    },
    head: {
      fontFamily: 'Lato-Black',
      fontSize: 20,
      color: colors.black_level_2,
      lineHeight: 50,
    },
    content: {
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      color: colors.black,
      lineHeight: 30,
    },
    endContent: {
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      color: colors.black,
      lineHeight: 30,
      marginBottom: 10,
    },
    headEnd: {
      fontFamily: 'Lato-Black',
      fontSize: 20,
      color: colors.black,
      lineHeight: 50,
      color: colors.white_level_3,
    },
    total: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.black,
      lineHeight: 50,
    },
  });

export default style;
