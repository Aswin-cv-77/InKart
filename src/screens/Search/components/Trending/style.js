import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../../components/common/colors';

const style = (width, height) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 15,
    },
    titleText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.black,
    },
    flatlist: {
        alignItems: 'center',
        marginVertical: 10,
    },
    imageContainer: {
        paddingHorizontal: 12,
        paddingVertical: 20,
        borderRadius: 15,
        overflow: 'hidden',
        marginRight: 10
    },
    image: {
        height: height* 0.1,
        width: width* 0.1,
        resizeMode: 'contain',
    },
  });

export default style;
