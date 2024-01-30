import {useRef, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating-widget';
import colors from '../../components/common/colors';
import MoreInfo from './components/MoreInfo';
import ExtraInfo from './components/ExtraInfo';
import ProductReview from './components/ProductReview';
import DeliveryInfo from './components/DeliveryInfo';
import ProductScroll from '../../components/ProductScroll';

const ProductDetails = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const route = useRoute();
  const scrollRef = useRef(null);
  const {product} = route.params;
  const navigation = useNavigation();
  const [rating, setRating] = useState(3.5);
  const [productDetailsObj, setProductDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" />,
      headerRight: () => <CommonHeaderRight cart={true} share={true} />,
      title: '',
    });
  }, []);
  useEffect(() => {
    setProductDetails(product);
  }, [product]);

  const navigationNeeded = (val, item) => {
    if (val) {
      scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
      setProductDetails(item);
    }
  };

  const handleQuantity = type => {
    if (type === 'plus') {
      setQuantity(quantity + 1);
    } else {
      if (quantity === 1) {
        return;
      } else {
        setQuantity(quantity - 1);
      }
    }
  };

  const handleAddToCart = () => {};

  return (
    <View>
      <ScrollView ref={scrollRef} style={responsiveStyle.container}>
        <View style={responsiveStyle.heartView}>
          <AntDesign name="hearto" size={30} color={colors.red} />
          {/* <AntIcon name="heart" size={30} color={colors.red} /> */}
        </View>
        <Image
          source={{uri: productDetailsObj?.image}}
          style={responsiveStyle.prodImage}
        />
        <View style={responsiveStyle.mainView}>
          <View style={responsiveStyle.padding}>
            <Text style={responsiveStyle.nameText}>
              {productDetailsObj?.name}
            </Text>
            <View style={responsiveStyle.ratingView}>
              <StarRating rating={rating} onChange={setRating} />
              <Text style={responsiveStyle.ratingText}>( 3 Rating )</Text>
            </View>
            <View style={responsiveStyle.ratingView}>
              <Text style={responsiveStyle.priceText}>
                ₹ {parseFloat(productDetailsObj?.price).toFixed(2)}
              </Text>
              <Text
                style={[
                  responsiveStyle.ratingText,
                  {color: colors.primaryGreen},
                  {fontFamily: 'Lato-Bold'},
                ]}>
                ( 25% off )
              </Text>
            </View>
            <MoreInfo />
            <View style={responsiveStyle.prodDetailsView}>
              <Text style={responsiveStyle.prodDetailsText}>
                Product Details
              </Text>
              <Text style={responsiveStyle.descText}>
                {productDetailsObj?.description}
              </Text>
            </View>

            <ExtraInfo />
            <ProductReview product={product} />
            <DeliveryInfo />
          </View>
          <ProductScroll isNavigationNeeded={navigationNeeded} />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 25,
          alignSelf: 'center',
          padding: 13,
          borderRadius: 8,
          backgroundColor: colors.primaryGreen,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          width: '92%',
        }}>
        <View
          style={{
            padding: 12,
            borderRadius: 8,
            backgroundColor: colors.white,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => handleQuantity('minus')}>
            <FontAwesome name="minus" size={20} color={colors.primaryGreen} />
          </TouchableOpacity>

          <Text
            style={{
              color: colors.primaryGreen,
              fontFamily: 'Lato-Black',
              fontSize: 20,
              marginHorizontal: 20,
            }}>
            {quantity}
          </Text>
          <TouchableOpacity onPress={() => handleQuantity('plus')}>
            <FontAwesome name="plus" size={20} color={colors.primaryGreen} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleAddToCart}>
          <Text
            style={{
              color: colors.white,
              fontFamily: 'Lato-Black',
              fontSize: 18,
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
