import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = (height, width, isPortrait) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white_level_2,
      padding: 15,
    },
    nameText: {
      fontFamily: 'Lato-Black',
      fontSize: 30,
      color: colors.black,
      textAlign: 'center',
    },
    proImageView: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 8,
    },
    proImage: {
      height: height * 0.2,
      width: width * 0.38,
      resizeMode: 'contain',
      borderRadius: width * 0.2,
    },
    editTouch: {
      position: 'absolute',
      right: 3,
      bottom: 0,
    },
    editImage: {
      height: height * 0.06,
      width: width * 0.12,
      resizeMode: 'contain',
    },
    modalView: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalImage: {
      height: height * 0.5,
      width: width * 0.9,
      marginTop: 10,
      backgroundColor: 'rgba(256, 256, 256, 0.7)',
      borderRadius: 20,
    },
    closeImage: {
      height: height * 0.07,
      width: width * 0.14,
      resizeMode: 'contain',
    },
    closeTouch: {
      position: 'absolute',
      right: 10,
      top: height * 0.25,
      zIndex: 9,
    },
    modalChooseView: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.7)',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    chooseCloseTouch: {
      position: 'absolute',
      right: -2,
      top: height * -0.01,
      zIndex: 9,
    },
    chooseCloseImage: {
      height: height * 0.06,
      width: width * 0.12,
      resizeMode: 'contain',
    },
    chooseView: {
      backgroundColor: 'rgba(19, 25, 32, 0.8)',
      borderRadius: 5,
      borderTopStartRadius: 15,
      borderTopEndRadius: 15,
      padding: 25,
      height: height * 0.4,
      width: width,
      // justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontFamily: 'Lato-Black',
      fontSize: 20,
      color: colors.white,
      marginBottom: 20,
    },
    chooseInnerView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    chooseImagesView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 30,
      marginTop: 5,
    },
    gImageBg: {
      backgroundColor: colors.secondaryGreen,
      borderRadius: 40,
      padding: 5,
      borderWidth: 1,
      borderColor: colors.secondaryGreen,
      marginVertical: 5,
    },
    cImageBg: {
      backgroundColor: colors.secondaryGreen,
      borderRadius: 40,
      padding: 5,
      paddingTop: 6,
      paddingBottom: 8,
      borderWidth: 1,
      borderColor: colors.secondaryGreen,
      marginVertical: 5,
      marginTop: 7,
    },
    galleryImage: {
      height: height * 0.074,
      width: width * 0.15,
      resizeMode: 'contain',
    },
    cameraImage: {
      height: height * 0.068,
      width: width * 0.15,
      resizeMode: 'contain',
    },
    galleryText: {
      fontFamily: 'Lato-Regular',
      fontSize: 17,
      color: colors.white_level_3,
    },
    cameraText: {
      fontFamily: 'Lato-Regular',
      fontSize: 17,
      color: colors.white_level_3,
    },
  });

export default style;
