import {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useDimensionContext} from '../../context';
import style from './style';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import Snackbar from 'react-native-snackbar';
import {
  validateEmail,
  validatePhone,
} from '../../components/common/validations';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../components/common/colors';
import {updateProfile} from '../../storage/action';
import {updateProfileImage} from './controller';

const Account = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
    dimensions.isPortrait,
  );

  const {userId, firstName, lastName, email, mobileNumber, profileImage} =
    useSelector(state => state);

  const dispatch = useDispatch();

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);
  const [fName, setFName] = useState(firstName);
  const [lName, setLName] = useState(lastName);
  const [uEmail, setUEmail] = useState(email);
  const [phone, setPhone] = useState(mobileNumber);
  const [profileImg, setProfileImg] = useState('');
  const [modal, setModal] = useState(false);
  const [modalChoose, setModalChoose] = useState(false);

  const handleOpenImage = () => {
    setModal(!modal);
  };
  const handleEditImage = () => {
    setModalChoose(!modalChoose);
  };
  const handleOpenGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setProfileImg(image.path ?? '');
        setModalChoose(false);
      })
      .catch(err => {
        console.warn(err);
      });
  };
  const handleOpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.warn(image);
      })
      .catch(err => {
        console.warn(err);
      });
  };
  const handleUpdateProfile = async () => {
    if (validatePhone(phone.trim())) {
      if (validateEmail(uEmail.trim())) {
        if (fName !== '' && lName !== '') {
          let newUrl = profileImage;
          if (profileImg !== '') {
            newUrl = await updateProfileImage(profileImg);
          }
          await firestore()
            .collection('Users')
            .doc(userId)
            .update({
              firstName: fName,
              lastName: lName,
              email: uEmail,
              mobilenumber: phone,
              profileImage: newUrl,
            })
            .then(() => {
              dispatch(
                updateProfile({
                  firstName: fName,
                  lastName: lName,
                  email: uEmail,
                  mobileNumber: phone,
                  profileImage: newUrl,
                }),
              );
              setProfileImg('');
              Snackbar.show({
                text: 'Profile Updated !',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: colors.primaryGreen,
              });
            });
        } else {
          Snackbar.show({
            text: 'Fill up all the fields to Continue',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: 'red',
          });
        }
      } else {
        Snackbar.show({
          text: 'Invalid Email',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
      }
    } else {
      Snackbar.show({
        text: 'Invalid Phone Number',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
    }
  };
  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.nameText}>
        {fName} {lName}
      </Text>
      <View style={responsiveStyle.proImageView}>
        <TouchableOpacity onPress={handleOpenImage}>
          <Image
            source={
              profileImg === ''
                ? profileImage === ''
                  ? require('../../assets/images/profile-pic.png')
                  : {uri: profileImage}
                : {uri: profileImg}
            }
            style={responsiveStyle.proImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={responsiveStyle.editTouch}
          onPress={handleEditImage}>
          <Image
            source={require('../../assets/images/edit-green2.png')}
            style={responsiveStyle.editImage}
          />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        onChange={text => setFName(text)}
        placeholder="First Name"
        value={fName}
      />
      <CustomTextInput
        onChange={text => setLName(text)}
        placeholder="Last Name"
        value={lName}
      />
      <CustomTextInput
        type="email"
        onChange={text => setUEmail(text)}
        placeholder="Email"
        value={uEmail}
      />
      <CustomTextInput
        onChange={text => setPhone(text)}
        placeholder="Mobile Number"
        value={phone}
      />
      <CustomButton
        type="Primary"
        handleButtonPress={handleUpdateProfile}
        buttonText={'Update Profile'}
      />

      <Modal transparent visible={modal} onRequestClose={() => setModal(false)}>
        <View style={responsiveStyle.modalView}>
          <TouchableOpacity
            onPress={() => setModal(false)}
            style={responsiveStyle.closeTouch}>
            <Image
              style={responsiveStyle.closeImage}
              source={require('../../assets/images/close-green.png')}
            />
          </TouchableOpacity>
          <Image
            source={
              profileImg === ''
                ? require('../../assets/images/profile-pic.png')
                : {uri: profileImg}
            }
            style={responsiveStyle.modalImage}
          />
        </View>
      </Modal>

      <Modal
        transparent
        visible={modalChoose}
        onRequestClose={() => setModalChoose(false)}>
        <View style={responsiveStyle.modalChooseView}>
          <View style={responsiveStyle.chooseView}>
            <TouchableOpacity
              onPress={() => setModalChoose(false)}
              style={responsiveStyle.chooseCloseTouch}>
              <Image
                style={responsiveStyle.chooseCloseImage}
                source={require('../../assets/images/close-green.png')}
              />
            </TouchableOpacity>
            <Text style={responsiveStyle.titleText}>Profile Photo</Text>
            <View style={responsiveStyle.chooseInnerView}>
              <View style={responsiveStyle.chooseImagesView}>
                <TouchableOpacity
                  onPress={handleOpenGallery}
                  style={responsiveStyle.gImageBg}>
                  <Image
                    style={responsiveStyle.galleryImage}
                    source={require('../../assets/images/gallery.png')}
                  />
                </TouchableOpacity>
                <Text style={responsiveStyle.galleryText}>Gallery</Text>
              </View>
              <View style={responsiveStyle.chooseImagesView}>
                <TouchableOpacity
                  onPress={handleOpenCamera}
                  style={responsiveStyle.cImageBg}>
                  <Image
                    style={responsiveStyle.cameraImage}
                    source={require('../../assets/images/camera.png')}
                  />
                </TouchableOpacity>
                <Text style={responsiveStyle.cameraText}>Camera</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Account;
