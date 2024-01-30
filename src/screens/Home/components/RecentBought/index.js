import React, {useState, useEffect} from 'react';
import {Image, Text, View, FlatList, TouchableOpacity} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../../../context';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const RecentBought = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
  );
  const navigation = useNavigation();

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
              result.push(doc.data());
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
    navigation.navigate('ProductDetails', {product: item});
  };

  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.headText}>Buy from Recently Bought</Text>
      <FlatList
        data={products}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        style={responsiveStyle.flatlist}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => handleProduct(item)}
              style={responsiveStyle.recentContainer}>
              <Image
                style={responsiveStyle.bannerImage}
                source={{uri: item.image}}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default RecentBought;
