import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = (width, height, isPortrait) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 16,
    },
    newContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 16,
    },
    search: {
      borderWidth: 1,
      borderColor: colors.primaryGreen,
      backgroundColor: colors.secondaryGreen,
      paddingHorizontal: 15,
      paddingVertical: 2,
      width: isPortrait ? width * 0.5 : width * 1.6,
      borderRadius: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    newSearch: {
      marginHorizontal: 6,
      borderWidth: 1,
      borderColor: colors.primaryGreen,
      backgroundColor: colors.secondaryGreen,
      paddingHorizontal: 15,
      paddingVertical: 2,
      width: isPortrait ? width * 0.45 : width * 1.6,
      borderRadius: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    searchInnerView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchIcon: {
      width: isPortrait ? width * 0.05 : width * 0.06,
      height: isPortrait ? height * 0.05 : height * 0.06,
      resizeMode: 'contain',
    },
    textInput: {
      fontFamily: 'Lato-Regular',
      fontSize: isPortrait ? 15 : 18,
      color: colors.darkGreen,
      paddingHorizontal: 5,
    },
    filterText: {
      fontFamily: 'Lato-Bold',
      fontSize: 17,
      color: colors.primaryGreen,
    },
  });
};

export default style;
