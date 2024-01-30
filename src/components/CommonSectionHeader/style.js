import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height) =>
  StyleSheet.create({
    mainContainer: {
      padding: 15,
      backgroundColor: colors.white,
    },
    headView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headText: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.black,
    },
    contentText: {
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      color: colors.black,
    },
    seeAllText: {
      fontFamily: 'Lato-Regular',
      fontSize: 18,
      color: colors.black,
    },
  });

export default style;