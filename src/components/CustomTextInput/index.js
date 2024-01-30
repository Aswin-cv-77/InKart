import React, {useState} from 'react';
import {TextInput, View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import colors from '../common/colors';
import {useDimensionContext} from '../../context';

const CustomTextInput = props => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const {
    type,
    placeholder,
    placeholderTextColor,
    onChange,
    value,
    check = false,
    multiline = false,
  } = props;
  const [show, setShow] = useState(false);
  const keyboardType =
    type === 'email'
      ? 'email-address'
      : type === 'password'
      ? 'default'
      : type === 'phone'
      ? 'phone-pad'
      : 'default';
  const secureTextEntry = type === 'password' ? (!show ? true : false) : false;
  const icon =
    type === 'password'
      ? show
        ? require('../../assets/images/view.png')
        : require('../../assets/images/hidden.png')
      : type === 'email'
      ? require('../../assets/images/arroba.png')
      : false;
  const handlePress = () => {
    type === 'password' ? setShow(!show) : null;
  };
  return (
    <View style={responsiveStyle.container}>
      <TextInput
        style={[
          responsiveStyle.CustomTextInput,
          {
            height: multiline
              ? dimensions.windowHeight * 0.1
              : dimensions.windowHeight * 0.04,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
        value={value}
        multiline={multiline}
      />
      {check ? <Text style={responsiveStyle.checkText}>Check</Text> : null}
      {!icon ? null : (
        <TouchableOpacity
          onPress={handlePress}
          disabled={type === 'password' ? false : true}>
          {type && type !== 'phone' ? (
            <Image
              style={
                type === 'password' ? responsiveStyle.eye : responsiveStyle.icon
              }
              source={icon}
            />
          ) : null}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
