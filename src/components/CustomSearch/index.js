import React from 'react';
import {View, Image, Text} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../context';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../common/colors';

const CustomSearch = props => {
  const {filter} = {...props};
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
    dimensions.isPortrait,
  );
  return (
    <View
      style={filter ? responsiveStyle.newContainer : responsiveStyle.container}>
      <View style={filter ? responsiveStyle.newSearch : responsiveStyle.search}>
        <View style={responsiveStyle.searchInnerView}>
          <Image
            style={responsiveStyle.searchIcon}
            source={require('../../assets/images/search.png')}
          />
          <TextInput
            placeholder="Search Here"
            placeholderTextColor={colors.black_level_3}
            style={responsiveStyle.textInput}
            selectionColor={colors.glowGreen}
          />
        </View>
        <Image
          style={responsiveStyle.searchIcon}
          source={require('../../assets/images/mic.png')}
        />
      </View>
      {filter ? <Text style={responsiveStyle.filterText}>Filter</Text> : null}
    </View>
  );
};

export default CustomSearch;
