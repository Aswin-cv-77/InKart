import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation, useTheme} from '@react-navigation/native';
import {
  validateEmail,
  validatePhone,
} from '../../components/common/validations';
import Snackbar from 'react-native-snackbar';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import colors from '../../components/common/colors';
import {useDimensionContext} from '../../context';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
  );

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '86961442875-91mrmfnmofuulm0dtua2tmjscfo8o7dl.apps.googleusercontent.com',
    });
  });

  const handleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  };

  const handleSignUp = async () => {
    if (
      username.trim() !== '' &&
      email.trim() !== '' &&
      mobile.trim() !== '' &&
      password.trim() !== '' &&
      cpassword.trim() !== ''
    ) {
      if (password.trim() === cpassword.trim()) {
        await firestore()
          .collection('Users')
          .where('username', '==', username.trim())
          .where('email', '==', email.trim())
          .get()
          .then(async snapshot => {
            if (snapshot.empty) {
              if (validateEmail(email.trim())) {
                if (validatePhone(mobile.trim())) {
                  const userData = {
                    username: username.trim(),
                    email: email.trim(),
                    mobilenumber: mobile.trim(),
                    password: password.trim(),
                    created: String(new Date()),
                    updated: String(new Date()),
                  };
                  await firestore()
                    .collection('Users')
                    .add(userData)
                    .then(resp => {
                      setError();
                      Snackbar.show({
                        text: 'New Account Created',
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor: colors.primaryGreen,
                      });
                      navigation.navigate('AppDrawer');
                    })
                    .catch(err => {
                      console.warn(err);
                    });
                } else {
                  setError('Given Phone Number is not valid');
                }
              } else {
                setError('Given email is not valid');
              }
            } else {
              Snackbar.show({
                text: 'This user name and password already exist',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
              });
            }
          });
      } else {
        setError('Passwords are mismatched');
      }
    } else {
      setError('Fill up all the fields to continue');
    }
  };

  const handleGoToLogin = () => {
    navigation.navigate('Login');
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
        <Text style={responsiveStyle.logoText}>
          <Text style={{color: '#33aa33'}}>In</Text>kart
        </Text>
        <Text
          style={{
            color: '#111',
            fontSize: 22,
            fontFamily: 'Lato-Medium',
          }}>
          Login Account
        </Text>
        {error !== false ? (
          <View style={responsiveStyle.errorView}>
            <Text style={responsiveStyle.errorText}>{error}</Text>
          </View>
        ) : null}
        <CustomTextInput
          placeholder="User Name"
          onChange={text => setUsername(text)}
          placeholderTextColor="grey"
        />

        <CustomTextInput
          placeholder="Email Address"
          type="email"
          onChange={text => setEmail(text)}
          placeholderTextColor="grey"
        />
        <CustomTextInput
          placeholder="Mobile Number"
          type="phone"
          onChange={text => setMobile(text)}
          placeholderTextColor="grey"
        />
        <CustomTextInput
          placeholder="Password"
          type="password"
          onChange={text => setPassword(text)}
          placeholderTextColor="grey"
        />
        <CustomTextInput
          placeholder=" Confirm Password"
          type="password"
          onChange={text => setCpassword(text)}
          placeholderTextColor="grey"
        />
        <CustomButton
          handleButtonPress={handleSignUp}
          type="Primary"
          buttonText="Sign Up"
        />
        <Text style={responsiveStyle.dashedText}>Or Sign up With</Text>
        <CustomButton
          handleButtonPress={handleButtonPress}
          type="Secondary"
          buttonText="Sign Up with Google"
          icon={require('../../assets/images/google.png')}
        />
        <Text style={responsiveStyle.goToLoginText} onPress={handleGoToLogin}>
          Go to Login
        </Text>
      </ScrollView>
    </View>
  );
};

export default SignUp;
