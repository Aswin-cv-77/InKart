import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonHeaderRight from '../../components/CommonHeaderRight';

const Wishlist = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const {product} = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <CommonHeaderRight cart={true} />,
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
    dimensions.isPortrait,
  );
  const wishtItems = [
    {
      id: 1,
      image: require('../../assets/images/apple.png'),
      title: 'Apple',
      desc: 'Fresh Homegrown Apples',
      off: '20% OFF',
      price: '₹ 120.00',
    },
    {
      id: 2,
      image: require('../../assets/images/gaming-mouse.png'),
      title: 'Gaming Mouse',
      desc: 'Smooth and Fast Gaming Mouse',
      off: '10% OFF',
      price: '₹ 1000.00',
    },
    {
      id: 3,
      image: require('../../assets/images/tshirt.png'),
      title: 'T-Shirt',
      desc: 'Trendy and Comfortable T-Shirts',
      off: '20% OFF',
      price: '₹ 1000.00',
    },
    {
      id: 4,
      image: require('../../assets/images/face-wash.png'),
      title: 'Face Wash',
      desc: 'Rich in Vitamin E',
      off: '25% OFF',
      price: '₹ 150.00',
    },
    {
      id: 5,
      image: require('../../assets/images/strawberry.png'),
      title: 'Strawberry',
      desc: 'Fresh Homegrown Strawberry',
      off: '12% OFF',
      price: '₹ 200.00',
    },
  ];
  return (
    <FlatList
      data={wishtItems}
      renderItem={({item, index}) => {
        return (
          <View style={responsiveStyle.mainContainer}>
            <View style={responsiveStyle.productView}>
              <Image source={item.image} style={responsiveStyle.productImage} />
              <View style={responsiveStyle.secondView}>
                <Text style={responsiveStyle.productText} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={responsiveStyle.descText} numberOfLines={2}>
                  {item.desc}
                </Text>
                <View style={responsiveStyle.bottomView}>
                  <Text style={responsiveStyle.priceText}>{item.price}</Text>
                  <View style={responsiveStyle.offView}>
                    <Text style={responsiveStyle.offText}>{item.off}</Text>
                  </View>
                  <View style={responsiveStyle.cartView}>
                    <Text style={responsiveStyle.cartText}>Add to Cart</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={responsiveStyle.removeView}>
              <Image
                source={require('../../assets/images/delete-white.png')}
                style={responsiveStyle.remove}
              />
            </View>
          </View>
        );
      }}
      keyExtractor={(item, index) => String(index)}
    />
  );
};

export default Wishlist;
