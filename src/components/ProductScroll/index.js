import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import colors from '../common/colors';
import {useDimensionContext} from '../../context';
import style from './style';
import CommonSectionHeader from '../CommonSectionHeader';
import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartCount} from '../../storage/action';

const ProductScroll = props => {
  const {isNavigationNeeded} = props;
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const {userId} = useSelector(state => state);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    await firestore()
      .collection('Products')
      .get()
      .then(async snapshot => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setProducts(result);
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };

  const handleProduct = item => {
    if (route.name === 'ProductDetails') {
      isNavigationNeeded(true, item);
    } else {
      navigation.navigate('ProductDetails', {
        product: item,
      });
    }
  };
  const handleWishlist = item => {
    navigation.navigate('Wishlist', {
      product: item,
    });
  };

  const handleAddToCart = async item => {
    console.warn(item.id);
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore().collection('Cart').add({
            created: Date.now(),
            description: item.description,
            name: item.name,
            price: item.price,
            quantity: 1,
            userId: userId,
            productId: item.id,
            image: item.image,
          });
          dispatch(updateCartCount(snapshot.size + 1));
        } else {
          firestore()
            .collection('Cart')
            .doc(snapshot?.docs[0].id)
            .update({
              quantity: parseInt(snapshot?.docs[0].data().quantity) + 1,
            });
        }
      });
  };

  return (
    <View style={responsiveStyle.mainContainer}>
      <CommonSectionHeader
        head={'Newly Added'}
        content={'Pay less, Get more'}
        rightText={'See All'}
      />
      <View>
        <FlatList
          data={products}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => handleProduct(item)}
                style={responsiveStyle.innerView}>
                <TouchableOpacity onPress={() => handleWishlist(item)}>
                  <Image
                    source={require('../../assets/images/wishlist.png')}
                    style={responsiveStyle.wishlistImage}
                  />
                </TouchableOpacity>
                <Image
                  source={{uri: item.image}}
                  style={responsiveStyle.itemImage}
                />
                <Text numberOfLines={1} style={responsiveStyle.nameText}>
                  {item.name}
                </Text>
                <Text numberOfLines={2} style={responsiveStyle.descText}>
                  {item.description}
                </Text>
                <View style={responsiveStyle.bottomView}>
                  <Text style={responsiveStyle.priceText}>{item.price}</Text>
                  <TouchableOpacity
                    onPress={() => handleAddToCart(item)}
                    style={responsiveStyle.plusView}>
                    <Text style={responsiveStyle.plusText}>+</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProductScroll;
