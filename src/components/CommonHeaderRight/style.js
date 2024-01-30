import colors from '../common/colors';

const {StyleSheet} = require('react-native');

const style = (height, width) =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    container: {paddingLeft: 15},
    plusContainer: {
      paddingRight: 10,
    },
    countView: {
      position: 'absolute',
      right: 6,
      top: -6,
      backgroundColor: colors.red,
      paddingHorizontal: 5.5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      overflow: 'hidden',
      zIndex: 9,
    },
    countText: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.white,
    },
    cartIcon: {
      height: 30,
      width: 30,
      marginRight: 10,
      resizeMode: 'contain',
    },
  });

export default style;
