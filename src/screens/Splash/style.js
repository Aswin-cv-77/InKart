import {StyleSheet} from 'react-native';

const style = (height, width) =>
  StyleSheet.create({
    container: {flex: 1},
    flashImage: {
      height: height,
      width: width,
      resizeMode: 'cover',
    },
  });

export default style;
