import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View, FlatList} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../../../context';
import firestore from '@react-native-firebase/firestore';

const Banner = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
    dimensions.isPortrait,
  );
  const [bannerItems, setBannerItems] = useState('');
  useEffect(() => {
    getBanners();
  }, []);

  const getBanners = async () => {
    await firestore()
      .collection('Banners')
      .get()
      .then(async snapshot => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              result.push(doc.data());
            }
          });
          setBannerItems(result)
        } 
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <FlatList
        data={bannerItems}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        style={responsiveStyle.flatlist}
        renderItem={({item, index}) => {
          return (
            <View key={item.head}>
              <ImageBackground
                style={responsiveStyle.bannerImage}
                source={{uri :item.image}}>
                <View>
                  <Text style={responsiveStyle.headText}>{item.head}</Text>
                  <Text style={responsiveStyle.contentText}>
                    {item.description}
                  </Text>
                </View>
                <View style={responsiveStyle.shopNowContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={responsiveStyle.shopNowText}>Shop Now</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Banner;
