import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (height, width) => StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  headerImage: {
    height: height * 0.25,
    width: width,
    resizeMode: 'cover',
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -height * 0.16,
    borderTopRightRadius: width * 0.055,
    borderTopLeftRadius: width * 0.055,
    padding: width * 0.035,
    overflow: 'hidden',
  },
  errorText: {
    fontSize: 16,
    color: colors.red,
    fontFamily: 'Lato-Italic',
    marginTop: 8,
    marginBottom: 1,
  },
});

export default style;
