import {useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import style from './style';
import firestore from '@react-native-firebase/firestore';
import {useDimensionContext} from '../../../../context';
import colors from '../../../../components/common/colors';
import {useSelector} from 'react-redux';

const Trending = () => {
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowHeight, dimension.windowWidth);
  const {categories} = useSelector(state => state);
  return (
    <View style={responsiveStyle.mainContainer}>
      <Text style={responsiveStyle.titleText}>Trending Category</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={responsiveStyle.flatlist}
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
            <View
              style={[
                responsiveStyle.imageContainer,
                {backgroundColor: categoriesColor},
              ]}>
              <Image source={{uri: item.image}} style={responsiveStyle.image} />
            </View>
          );
        }}></FlatList>
    </View>
  );
};

export default Trending;
