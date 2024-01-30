import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../components/common/colors';

const style = (height, width, isPortrait) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    container: {
      height: height,
      backgroundColor: colors.white_level_2,
    },
    mainFlatlist: {
      alignSelf: 'center',
      marginVertical: height * 0.01,
    },
    renderView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: width,
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: height* 0.018,
    },
    offCircleView: {
      marginRight: (-height * 0.02) / 2,
      zIndex: 99,
    },
    circleRight: {
      height: 25,
      width: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_level_2,
    },
    circleCenter:{
      height: 25,
      width: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_level_2,
      marginTop: -25 / 2,
    },
  });

export default style;
