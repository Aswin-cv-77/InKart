import {useState, useEffect, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDimensionContext} from '../../context';
import CommonButton from '../../components/CommonButton';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import OrderTotal from './components/OrderTotal';
import colors from '../../components/common/colors';
import style from './style';

const Cart = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
    dimensions.isPortrait,
  );
  const {userId} = useSelector(state => state);
  const navigation = useNavigation();
  const [cartProducts, setCartProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getCartProducts();
    }, []),
  );

  const getCartProducts = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
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
          setCartProducts(result);
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type={'back'} />,
    });
  }, []);

  const updateArray = id => {
    const result = cartProducts.filter(x => {
      return x.id != id;
    });
    setCartProducts(result);
  };

  return (
    <View style={responsiveStyle.mainContainer}>
      <FlatList
        data={cartProducts}
        extraData={cartProducts}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <RenderItem item={item} index={index} updateArray={updateArray} />
        )}
        ListFooterComponent={() => (
          <>
            <View style={responsiveStyle.renderView}>
              {/* STARTING DESIGN */}
              <View style={responsiveStyle.offCircleView}>
                <View style={responsiveStyle.circleRight}></View>
                <View style={responsiveStyle.circleRight}></View>
                <View style={responsiveStyle.circleRight}></View>
                <View style={responsiveStyle.circleRight}></View>
              </View>
              {/* STARTING DESIGN */}
              {/* CENTER */}
              <View
                style={{
                  height: '100%',
                  width: '66%',
                  backgroundColor: colors.secondaryGreen,
                  padding: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lato-Bold',
                      color: colors.primaryGreen,
                      fontSize: 50,
                    }}>
                    22
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontFamily: 'Lato-Regular',
                        color: colors.primaryGreen,
                        fontSize: 12,
                      }}>
                      %
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lato-Regular',
                        color: colors.primaryGreen,
                        fontSize: 12,
                      }}>
                      OFF
                    </Text>
                  </View>
                  <View
                    style={{
                      marginLeft: 5,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        color: colors.black,
                        fontSize: 16,
                      }}>
                      HALLOWEEN Day Offers
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Lato-Regular',
                        color: colors.black_level_2,
                        fontSize: 13,
                      }}>
                      Offer available till Midnight
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  height: 100,
                  backgroundColor: colors.secondaryGreen,
                }}>
                <View style={responsiveStyle.circleCenter}></View>
                <View
                  style={[
                    responsiveStyle.circleCenter,
                    {marginBottom: -25 / 2},
                  ]}></View>
              </View>
              <View
                style={{
                  height: 100,
                  width: '25%',
                  backgroundColor: colors.secondaryGreen,
                  paddingRight: 15,
                  paddingVertical: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    color: colors.black_level_2,
                    fontSize: 14,
                  }}>
                  Use Code
                </Text>
                <View
                  style={{
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    justifyContent: 'center',
                    borderRadius: 15,
                    backgroundColor: colors.primaryGreen,
                    overflow: 'hidden',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lato-Regular',
                      color: colors.white,
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    HALLO23
                  </Text>
                </View>
              </View>
              {/* CENTER */}
              {/* END DESIGN */}
              <View style={{marginLeft: -25 / 2}}>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 25 / 2,
                    backgroundColor: colors.white_level_3,
                  }}></View>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 25 / 2,
                    backgroundColor: colors.white_level_3,
                  }}></View>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 25 / 2,
                    backgroundColor: colors.white_level_3,
                  }}></View>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 25 / 2,
                    backgroundColor: colors.white_level_3,
                  }}></View>
              </View>
              {/* END DESIGN */}
            </View>

            <OrderTotal />
            <CommonButton buttonText={'Proceed to Checkout'} />
          </>
        )}
      />
    </View>
  );
};

const RenderItem = ({item, index, updateArray}) => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
    dimensions.isPortrait,
  );
  const [quan, setQuan] = useState(item.quantity);
  const {userId} = useSelector(state => state);

  useEffect(() => {
    setQuan(item.quantity);
  }, [item]);

  const AddToCart = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.productId)
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
        } else {
          firestore()
            .collection('Cart')
            .doc(snapshot?.docs[0].id)
            .update({
              quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + 1,
            });
        }
      });
  };

  const removeItem = async () => {
    if (quan <= 1) {
      //remove from cart
      await firestore()
        .collection('Cart')
        .doc(item.id)
        .delete()
        .then(() => {
          updateArray(item.id);
        });
    } else {
      //update cart
      setQuan(quan - 1);
      firestore()
        .collection('Cart')
        .doc(item.id)
        .update({
          quantity: parseInt(item.quantity, 10) - 1,
        });
    }
  };

  return (
    <View style={responsiveStyle.productView}>
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
              <Text style={responsiveStyle.offText}>20 %</Text>
            </View>
          </View>
          <View style={responsiveStyle.quanView}>
            <TouchableOpacity onPress={removeItem}>
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
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;
