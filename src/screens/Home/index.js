import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import style from './style';
import CustomHeader from '../../components/CustomHeader';
import CustomSearch from '../../components/CustomSearch';
import Banner from './components/Banner';
import RecentBought from './components/RecentBought';
import ShopCategory from './components/ShopCategory';
import ProductScroll from '../../components/ProductScroll';
import OfferProducts from '../../components/OfferProducts';

const Home = () => {
  return (
    <View style={style.mainContainer}>
      <CustomHeader />
      <ScrollView
        style={style.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <Banner />
        <RecentBought />
        <ShopCategory />
        <ProductScroll />
        <OfferProducts />
        <Text style={style.footerText}>Didn't find what you are looking for?</Text>
        <View style={style.footerButton}>
          <Text numberOfLines={1} style={style.buttonText}>Browse Category</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
