import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useDimensionContext} from '../../../../context';
import style from './style';
import colors from '../../../../components/common/colors';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {updateCategories} from '../../../../storage/action';
import {useNavigation} from '@react-navigation/native';

const ShopCategory = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
  );
  const navigation = useNavigation();
  const [categories, setCategories] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    await firestore()
      .collection('Categories')
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setCategories(result);
          dispatch(updateCategories(result));
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };

  const handleCategories = index => {
    navigation.navigate('Categories', {catIndex: index});
  };

  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.headText}>Shop by Category</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={4}
        contentContainerStyle={responsiveStyle.flatlist}
        data={categories}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => {
          const categoriesColor =
            index % 4 == 0
              ? colors.category1
              : index % 4 == 1
              ? colors.category2
              : index % 4 === 2
              ? colors.category3
              : index % 4 === 3
              ? colors.category4
              : index % 4 === 4;
          return (
            <TouchableOpacity
              onPress={() => handleCategories(index)}
              style={responsiveStyle.innerView}>
              <View
                style={[
                  responsiveStyle.imageView,
                  {backgroundColor: categoriesColor},
                ]}>
                <Image
                  style={responsiveStyle.image}
                  source={{uri: item.image}}
                />
              </View>
              <Text style={responsiveStyle.itemName}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ShopCategory;
