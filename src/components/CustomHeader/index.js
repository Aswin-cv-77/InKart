import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import colors from '../common/colors';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';

const CustomHeader = () => {
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
    dimensions.isPortrait,
  );
  return (
    <View style={responsiveStyle.container}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={responsiveStyle.drawerContainer}>
        <Image
          style={responsiveStyle.drawerImage}
          source={require('../../assets/images/apps.png')}
        />
      </TouchableOpacity>
      <Image
        style={responsiveStyle.cartImage}
        source={require('../../assets/images/logo.jpeg')}
      />
    </View>
  );
};

export default CustomHeader;
