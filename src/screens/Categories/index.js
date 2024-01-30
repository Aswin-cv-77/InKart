import {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import CustomSearch from '../../components/CustomSearch';
import style from './style';
import firestore from '@react-native-firebase/firestore';
import {useDimensionContext} from '../../context';
import colors from '../../components/common/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useSelector} from 'react-redux';

const Categories = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
  );
  const navigation = useNavigation();
  const route = useRoute();
  const {catIndex = 0} = route?.params ?? {};

  const {categories} = useSelector(state => state);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState({});
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
    getProducts();
  }, []);

  useEffect(() => {
    setActive(catIndex);
  }, [catIndex]);

  const getProducts = async () => {
    await firestore()
      .collection('Products')
      .get()
      .then(snapshot => {
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

  const handleCatTouch = index => {
    setActive(index);
  };

  const handleProduct = item => {
    navigation.navigate('ProductDetails', {product: item});
  };

  return (
    <View style={responsiveStyle.mainContainer}>
      <ScrollView
        style={responsiveStyle.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <View style={responsiveStyle.rowView}>
          {/* Sidebar */}
          <View>
            <FlatList
              data={categories}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={responsiveStyle.catFlatlist}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleCatTouch(index)}
                    style={[
                      responsiveStyle.catTouch,
                      {
                        backgroundColor:
                          index === active ? colors.white : 'transparent',
                      },
                    ]}>
                    <Image
                      source={{uri: item.image}}
                      style={responsiveStyle.catImage}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          {/* Content */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground
              style={responsiveStyle.backImage}
              source={require('../../assets/images/banner2.jpeg')}>
              <Text style={responsiveStyle.catName} numberOfLines={1}>
                {categories[active]?.name}
              </Text>
              <Text style={responsiveStyle.catDesc} numberOfLines={2}>
                {categories[active]?.description}
              </Text>
            </ImageBackground>
            <FlatList
              data={products}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={responsiveStyle.prodFlatlist}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleProduct(item)}
                    style={responsiveStyle.prodContainer}>
                    <View style={responsiveStyle.prodImageBg}>
                      <Image
                        source={{uri: item.image}}
                        style={responsiveStyle.prodImage}
                      />
                    </View>
                    <Text numberOfLines={2} style={responsiveStyle.prodName}>
                      {item.name}
                    </Text>
                    <Text style={responsiveStyle.prodDesc}>₹ {item.price}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
