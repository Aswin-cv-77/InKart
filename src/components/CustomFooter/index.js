import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {useDimensionContext} from '../../context';
import style from './style';
import {updateCartCount} from '../../storage/action';

const CustomFooter = ({state, descriptors, navigation}) => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
    dimensions.isPortrait,
  );
  const {cartCount, userId} = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    getCartProducts();
  }, []);

  const getCartProducts = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .get()
      .then(async snapshot => {
        dispatch(updateCartCount(snapshot.size));
      })
      .catch(err => {
        console.warn(err);
      });
  };

  return (
    <View style={responsiveStyle.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index == index;
        const icon =
          route.name === 'Home'
            ? require('../../assets/images/home-white.png')
            : route.name === 'Categories'
            ? require('../../assets/images/menu-white.png')
            : route.name === 'Search'
            ? require('../../assets/images/search-white.png')
            : route.name === 'Offers'
            ? require('../../assets/images/price-tag-white.png')
            : require('../../assets/images/shopping-cart-white.png');
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={responsiveStyle.iconView}>
            <Image style={responsiveStyle.icon} source={icon} />
            <Text style={responsiveStyle.footerText}>{route.name}</Text>
            {route.name === 'Cart' ? (
              <View style={responsiveStyle.cartCountView}>
                <Text style={responsiveStyle.cartCount}>{cartCount}</Text>
              </View>
            ) : null}
            {isFocused ? (
              <Image
                style={responsiveStyle.dot}
                source={require('../../assets/images/period.png')}
              />
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomFooter;
