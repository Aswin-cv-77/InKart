import {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDimensionContext} from '../../context';
import {useNavigation} from '@react-navigation/native';
import CommonSectionHeader from '../CommonSectionHeader';
import style from './style';
import colors from '../common/colors';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartCount} from '../../storage/action';

const OfferProducts = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );

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

  return (
    <View style={responsiveStyle.mainContainer}>
      <CommonSectionHeader
        head={'Say Hello to Offers'}
        content={'Best Prices for all the time'}
        rightText={'See All'}
      />
      <View>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
        />
      </View>
    </View>
  );
};

const RenderItem = ({item, index}) => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {userId} = useSelector(state => state);
  const [quan, setQuan] = useState(0);

  const handleProduct = () => {
    navigation.navigate('ProductDetails', {product: item});
  };

  const AddToCart = async () => {
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
    <TouchableOpacity
      onPress={handleProduct}
      style={responsiveStyle.productView}>
      <Image source={{uri: item.image}} style={responsiveStyle.productImage} />
      <View style={responsiveStyle.textView}>
        <Text numberOfLines={1} style={responsiveStyle.headText}>
          {item.name}
        </Text>
        <Text numberOfLines={2} style={responsiveStyle.contentText}>
          {item.description}
        </Text>
        <View style={responsiveStyle.priceView}>
          <View style={responsiveStyle.priceView2}>
            <Text style={responsiveStyle.priceText}>₹ {item.price}</Text>
            <View style={responsiveStyle.offView}>
              <Text style={responsiveStyle.offText}>20%</Text>
            </View>
          </View>
          <View style={responsiveStyle.quanView}>
            <TouchableOpacity
              onPress={() => {
                setQuan(quan <= 0 ? quan : quan - 1);
              }}>
              <AntDesign name="minus" size={20} color={colors.primaryGreen} />
            </TouchableOpacity>
            <Text style={responsiveStyle.countText}>{quan}</Text>
            <TouchableOpacity
              onPress={() => {
                setQuan(quan + 1);
                AddToCart();
              }}>
              <AntDesign name="plus" size={20} color={colors.primaryGreen} />
            </TouchableOpacity>
            {/* <Text style={responsiveStyle.minusPlusText}>+</Text> */}
            {/* <Text style={responsiveStyle.minusPlusText}>-</Text> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OfferProducts;
