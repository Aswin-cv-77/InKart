import {StyleSheet} from 'react-native';
import colors from '../../../../components/common/colors';

const style = (height, width) => {
  return StyleSheet.create({
    container: {
      margin: 15,
    },
    headText: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      textAlign: 'center',
      color: colors.black,
    },
    flatlist: {
      marginVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerView: {
      marginRight: 15,
      marginBottom: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageView: {
      justifyContent: 'center',
      alignItem: 'center',
      borderRadius: 15,
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    image: {
      height: height * 0.1,
      width: width * 0.1,
      resizeMode: 'contain',
    },
    itemName: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.black,
    },
  });
};

export default style;
