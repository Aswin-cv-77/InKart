import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';

const CommonButton = props => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  return (
    <View style={responsiveStyle.mainContainer}>
      <Text style={responsiveStyle.text}>
        {props.buttonText}
        </Text>
    </View>
  );
};

export default CommonButton;
