import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (height, width) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#699372',
      borderRadius: width * 0.02,
      backgroundColor: colors.secondaryGreen,
      marginVertical: height * 0.04,
      padding: width * 0.018,
    },
    CustomTextInput: {
      padding: 0,
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
      color: colors.black,
    },
    checkText: {
      fontFamily: 'Lato-Regular',
      color: colors.primaryBlue,
      fontSize: 18,
    },
    icon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    eye: {
      width: 27,
      height: 20,
      resizeMode: 'center',
      marginRight: -3.6,
    },
  });

export default style;
