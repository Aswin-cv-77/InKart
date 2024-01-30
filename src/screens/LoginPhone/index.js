import React, {useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import style from './style';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import colors from '../../components/common/colors';
import {validateOtp, validatePhone} from './controller';
import {useDimensionContext} from '../../context';

const LoginPhone = () => {
  const [phone, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [showOtp, setShowOtpField] = useState(false);
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
  );

  const handleSignIn = async () => {
    try {
      setError(null);
      if (validatePhone(phone.trim())) {
        const confirmation = await auth().signInWithPhoneNumber(phone);
        if (confirmation) {
          Snackbar.show({
            text: 'Verification code is sent to your mobile number, please verify',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: 'green',
            textColor: colors.grey,
          });
          setConfirm(confirmation);
          setShowOtpField(true);
        }
      } else {
        setError('Given phone number contains Alphabets or Special Characters');
      }
    } catch (error) {
      setError('Given phone number is incorrect!');
    }
  };

  const handleGoToNavigation = () => {
    navigation.navigate('Login');
  };

  const handleVerifyOtp = async () => {
    if (otp.trim() !== '' && validateOtp(otp.trim())) {
      const res = await confirm.confirm(otp.trim());
      if (res) {
        Snackbar.show({
          text: 'Your phone number is verified, Login Successfull',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: colors.primaryGreen,
          textColor: colors.white,
        });
        navigation.navigate('AppDrawer');
      } else {
        Snackbar.show({
          text: 'Incorrect OTP',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: colors.red,
          textColor: colors.white,
        });
      }
    }
  };

  return (
    <View style={responsiveStyle.container}>
      <Image
        source={require('../../assets/images/header_bg.jpeg')}
        style={responsiveStyle.headerImage}
      />
      <ScrollView
        style={responsiveStyle.scrollView}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            color: '#111',
            fontSize: 22,
            fontFamily: 'Lato-Regular',
          }}>
          Login with Phone
        </Text>

        {error !== null ? (
          <Text style={responsiveStyle.errorText}>{error}</Text>
        ) : null}

        <CustomTextInput
          type="phone"
          placeholder="Phone Number"
          onChange={text => setPhoneNumber(text)}
          placeholderTextColor="grey"
        />
        {showOtp ? (
          <CustomTextInput
            type="phone"
            placeholder="Enter OTP"
            onChange={text => setOtp(text)}
            placeholderTextColor="grey"
          />
        ) : null}

        <CustomButton
          type="Primary"
          buttonText={showOtp ? 'Verify OTP' : 'Sign Up'}
          handleButtonPress={showOtp ? handleVerifyOtp : handleSignIn}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            fontFamily: 'Lato-Medium',
            marginBottom: 8,
          }}
          onPress={handleGoToNavigation}>
          Go to Login
        </Text>
      </ScrollView>
      <View style={responsiveStyle.footer}>
        <Text style={responsiveStyle.footerText}>Login as a Guest</Text>
      </View>
    </View>
  );
};

export default LoginPhone;
