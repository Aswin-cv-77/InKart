const {StyleSheet} = require('react-native');

const style = (height, width) =>
  StyleSheet.create({
    container: {paddingLeft: 15},
    image: {height: 30, width: 30, resizeMode: 'contain'},
  });

export default style;
