import {StyleSheet, Dimensions} from 'react-native';
import colors from '../common/colors';

const {height, width} = Dimensions.get('screen');

const style = StyleSheet.create({
  primaryButton: {
    backgroundColor: colors.primaryBlue,
    padding: height * 0.018,
    marginVertical: height * 0.004,
    borderRadius: width * 0.018,
  },
  secondaryButton: {
    backgroundColor: colors.secondaryGreen,
    padding: height * 0.022,
    marginVertical: 8,
    marginVertical: height * 0.01,
    borderRadius: width * 0.02,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 19,
    fontFamily: 'Lato-Bold',
  },
  secondaryButtonText: {
    color: colors.black,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Lato-Medium',
  },
  icon: {
    height: height * 0.033,
    width: width * 0.074,
    marginRight: width * 0.022,
    resizeMode: 'contain',
  },
});

export default style;
