import {View, Text, ScrollView} from 'react-native';
import style from './style';
import CustomSearch from '../../components/CustomSearch';
import OfferProducts from '../../components/OfferProducts';
import Trending from './components/Trending';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';

const Search = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type={'back'} />,
    });
  }, []);
  return (
    <View style={style.mainContainer}>
      <ScrollView
        style={style.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <Trending />
        <OfferProducts />
      </ScrollView>
    </View>
  );
};

export default Search;
