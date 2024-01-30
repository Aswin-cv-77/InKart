import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../components/common/colors';

const {height, width} = Dimensions.get('screen');

const style = (height, width) => StyleSheet.create({
  container: {
    height: height,
    flex:1,
  },
  headerImage: {
    height: height * 0.25,
    width: width,
    resizeMode: 'cover',
  },
  logoText: {
    color: '#111',
    fontSize: 35,
    fontFamily: 'Poppins-SemiBold',
  },
  scrollView: {
    // flex: 1,
    backgroundColor: colors.white,
    marginTop: -height * 0.16,
    borderTopRightRadius: width * 0.055,
    borderTopLeftRadius: width * 0.055,
    padding: width * 0.035,
    paddingBottom: height * 0.04,
    overflow: 'hidden',
  },
  dashedText: {
    textAlign: 'center',
    fontSize: 15,
    color: colors.black_level_3,
    fontFamily: 'Lato-Regular',
    marginBottom: 3
  },
  goToLoginText: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Lato-Medium',
    marginVertical: width * 0.02,
    paddingBottom: width * 0.2,
  },
  errorView: {marginTop: 3},
  errorText: {
    fontFamily: 'Lato-Medium',
    fontSize: 14,
    color: 'red',
    paddingVertical: 3,
  },
  footer: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondaryGreen,
    margin: 10,
  },
  footerText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: colors.black_level_3,
  },
});

export default style;
