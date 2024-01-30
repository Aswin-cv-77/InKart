import {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import CustomSearch from '../../components/CustomSearch';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import CommonEmpty from '../../components/CommonEmpty';

const Shop = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const navigation = useNavigation();
  const route = useRoute();
  const {type} = route.params;
  const {categories} = useSelector(state => state);
  const [selectedCategory, setSelectedCategory] = useState('');
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
  useEffect(() => {
    if (type == 'all') {
      setSelectedCategory('Shop');
    }
  }, [type]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" />,
      headerRight: () => <CommonHeaderRight cart={true} />,
      title: selectedCategory,
    });
  }, [selectedCategory]);

  const handleCategories = async item => {
    setSelectedCategory(item.name);
    await firestore()
      .collection('Products')
      .where('categoryId', '==', item.id)
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
          setProducts(result.length > 0 ? result : []);
        } else {
          setProducts('');
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };

  const emptyComponent = () => {
    return <CommonEmpty title={'No Products Available'} />;
  };

  const handleRenderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategories(item)}
        style={responsiveStyle.catItemContainer}>
        <Text style={responsiveStyle.catItemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const handleProduct = item => {
    navigation.navigate('ProductDetails', {product: item});
  };

  const handleProductRender = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleProduct(item)}
        style={responsiveStyle.productView}>
        <Image
          source={{uri: item.image}}
          style={responsiveStyle.productImage}
        />
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
              <Text style={responsiveStyle.minusPlusText}>-</Text>
              <Text style={responsiveStyle.countText}>0</Text>
              <Text style={responsiveStyle.minusPlusText}>+</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        style={responsiveStyle.flatlist}
        contentContainerStyle={responsiveStyle.contentStyle}
        renderItem={handleRenderItem}
      />
      <CustomSearch filter={true} />
      <View style={responsiveStyle.commonPadding}>
        <FlatList
          data={products}
          vertical
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          style={responsiveStyle.prodFlatlist}
          renderItem={handleProductRender}
          ListEmptyComponent={emptyComponent}
        />
      </View>
    </View>
  );
};

export default Shop;
