import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import style from './style';

const CustomButton = props => {
  const {buttonText, type, handleButtonPress, icon} = props;
  return (
    <TouchableOpacity
      type={type}
      onPress={handleButtonPress}
      style={type === 'Primary' ? style.primaryButton : style.secondaryButton}>
      {type !== 'Primary' ? <Image source={icon} style={style.icon} /> : null}
      <Text
        style={
          type === 'Primary'
            ? style.primaryButtonText
            : style.secondaryButtonText
        }>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
