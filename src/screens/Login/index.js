import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import style from './style';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Snackbar from 'react-native-snackbar';
import firestore from '@react-native-firebase/firestore';
import colors from '../../components/common/colors';
import auth from '@react-native-firebase/auth';
import {useDimensionContext} from '../../context';
import {validateEmail} from '../../components/common/validations';
import {useDispatch} from 'react-redux';
import {login} from '../../storage/action';

const Login = () => {
  const dimensions = useDimensionContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
  );

  const handleGoToLoginPhone = () => {
    navigation.navigate('LoginPhone');
  };

  // console.warn(user); It was inside onAuthStateChanged function
  const onAuthStateChanged = user => {};

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const handleSignIn = async () => {
    if (email.trim() !== '' && password.trim() !== '') {
      if (validateEmail(email.trim())) {
        await firestore()
          .collection('Users')
          .where('email', '==', email.trim().toLowerCase())
          .get()
          .then(async snapshot => {
            if (snapshot.empty) {
              Snackbar.show({
                text: 'This User does not exist, try creating a new account',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
              });
            } else {
              snapshot.forEach(documentSnapshot => {
                const userData = documentSnapshot.data();

                if (userData.password == password.trim()) {
                  // console.warn(userData.mobilenumber);
                  Snackbar.show({
                    text: 'Login Successfull',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: colors.primaryGreen,
                  });
                  dispatch(
                    login({
                      userId: documentSnapshot.id,
                      firstName: userData.firstName,
                      lastName: userData.lastName,
                      email: userData.email,
                      mobileNumber: userData.mobilenumber,
                      profileImage: userData.profileImage,
                    }),
                  );
                  navigation.navigate('Home');
                } else {
                  Snackbar.show({
                    text: 'Incorrect Password',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: 'red',
                  });
                }
              });
            }
          })
          .catch(err => console.warn(err));
      } else {
        Snackbar.show({
          text: 'Enter a valid Email',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
      }
    } else {
      Snackbar.show({
        text: 'Fill up the fields to Continue',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
    }
  };

  const handleButtonPress = () => {};

  const handleGooglePress = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    } catch (error) {
      console.warn(error);
    }
  };

  const handleGoToNavigation = () => {
    navigation.navigate('SignUp');
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
            fontFamily: 'Lato-SemiBold',
          }}>
          Login Account
        </Text>
        <CustomTextInput
          placeholder="Email Address"
          type="email"
          onChange={text => setEmail(text)}
          placeholderTextColor="grey"
        />
        <CustomTextInput
          placeholder="Password"
          type="password"
          onChange={text => setPassword(text)}
          placeholderTextColor="grey"
        />
        <CustomButton
          handleButtonPress={handleSignIn}
          type="Primary"
          buttonText="Sign In"
        />
        <Text style={responsiveStyle.signInText} onPress={handleGoToNavigation}>
          If you are new, Create Here
        </Text>

        <View style={responsiveStyle.dashedLineContainer}>
          <View style={responsiveStyle.overflow}>
            <View style={responsiveStyle.dashedLine} />
          </View>
          <View style={responsiveStyle.textContainer}>
            <Text style={responsiveStyle.dashedText}>Or Login With</Text>
          </View>
        </View>

        <CustomButton
          handleButtonPress={handleGoToLoginPhone}
          type="Secondary"
          buttonText="Sign In with Phone"
          icon={require('../../assets/images/smartphone.png')}
        />
        <CustomButton
          handleButtonPress={handleGooglePress}
          type="Secondary"
          buttonText="Sign In with Google"
          icon={require('../../assets/images/google.png')}
        />
      </ScrollView>
      <View style={responsiveStyle.footer}>
        <Text style={responsiveStyle.footerText}>Login as a Guest</Text>
      </View>
    </View>
  );
};

export default Login;
