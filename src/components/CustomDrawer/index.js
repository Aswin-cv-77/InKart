import {View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../common/colors';
import {useDimensionContext} from '../../context';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {signout} from '../../storage/action';

const CustomDrawer = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {firstName, lastName, email, profileImage} = useSelector(
    state => state,
  );
  const Contents = [
    {
      itemId: 0,
      itemName: 'Home',
      // navigateTo: 'Home',
      navigateTo: 'Home',
      icon: require('../../assets/images/home-drawer.png'),
    },
    {
      itemId: 1,
      itemName: 'Shop by category',
      navigateTo: 'Categories',
      icon: require('../../assets/images/category-drawer.png'),
    },
    {
      itemId: 2,
      itemName: 'Orders',
      navigateTo: 'Orders',
      icon: require('../../assets/images/orders-drawer.png'),
    },
    {
      itemId: 3,
      itemName: 'Your Wishlist',
      navigateTo: 'Wishlist',
      icon: require('../../assets/images/wishlist-drawer.png'),
    },
    {
      itemId: 4,
      itemName: 'Your Account',
      navigateTo: 'Account',
      icon: require('../../assets/images/account-drawer.png'),
    },
  ];
  const handleSignOut = () => {
    dispatch(signout());
  };
  return (
    <View style={responsiveStyle.mainContainer}>
      {/* PROFILE */}

      <TouchableOpacity
        style={responsiveStyle.profileContainer}
        onPress={() => navigation.navigate('Account')}>
        <View style={responsiveStyle.profileInnerContainerGlow}>
          <View style={responsiveStyle.profileInnerContainer}>
            <Image
              source={
                profileImage === ''
                  ? require('../../assets/images/profile-pic.png')
                  : {uri: profileImage}
              }
              style={responsiveStyle.image}
            />
          </View>
        </View>
        <View style={{marginLeft: 10, width: '75%'}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Lato-Bold',
              color: colors.black,
            }}>
            {firstName} {lastName}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Lato-Bold',
              color: colors.black,
            }}>
            {email}
          </Text>
        </View>
      </TouchableOpacity>

      {/* SCREENS*/}

      <View
        style={{
          marginVertical: 15,
        }}>
        <View>
          {Contents.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.itemId}
                onPress={() => navigation.navigate(item.navigateTo)}
                style={responsiveStyle.screensContainer}>
                <View style={responsiveStyle.screensInnerContainer}>
                  <Image
                    source={item.icon}
                    style={responsiveStyle.drawerIcon}
                  />
                  <Text style={responsiveStyle.screenName}>
                    {item.itemName}
                  </Text>
                </View>
                <Image
                  source={require('../../assets/images/next.png')}
                  style={responsiveStyle.drawerNextIcon}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <TouchableOpacity
        onPress={handleSignOut}
        style={responsiveStyle.logoutContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // paddingHorizontal: 10,
          }}>
          <Image
            source={require('../../assets/images/next.png')}
            style={responsiveStyle.drawerNextIcon}
          />
          <Text style={responsiveStyle.logoutText}>Sign Out</Text>
        </View>
      </TouchableOpacity>

      {/* SUPPORT */}
      <View style={responsiveStyle.supportContainer}>
        <View style={{}}>
          <Text style={responsiveStyle.supportHead}>Contact Support</Text>
          <Text style={responsiveStyle.supportText}>
            If you have any problems with the app, feel free to contact our 24
            hours support system
          </Text>
          <View style={responsiveStyle.contactContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={responsiveStyle.contactText}>Contact</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
