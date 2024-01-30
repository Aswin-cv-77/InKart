import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../components/common/colors';

const {height, width} = Dimensions.get('screen');

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    height: height,
    // backgroundColor: colors.secondaryGreen,
    // backgroundColor: colors.grey,
    backgroundColor: colors.white_level_2,
  },
  footerText: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: colors.black,
    padding: 15,
  },
  footerButton: {
    padding: 15,
    backgroundColor: colors.primaryGreen,
    width: '50%',
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
});

export default style;
