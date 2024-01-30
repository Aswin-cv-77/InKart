import {View, Text, ScrollView, FlatList} from 'react-native';

import CustomSearch from '../../components/CustomSearch';
import colors from '../../components/common/colors';
import {useDimensionContext} from '../../context';
import style from './style';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Offers = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type={'back'} />,
    });
  }, []);
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
    dimensions.isPortrait,
  );
  const offersArray = [
    {
      offer: '41',
      head: 'Midnight Sale Offer',
      content: 'On all the orders above ₹ 999',
      code: 'MID71T',
    },
    {
      offer: '22',
      head: 'Black Friday Sale Offer',
      content: 'On all the orders above ₹ 199',
      code: 'BLF2AR',
    },
    {
      offer: '48',
      head: 'Christmas Sale Offer',
      content: 'On all the orders above ₹ 1200',
      code: 'XMA23A',
    },
    {
      offer: '30',
      head: 'Summer Sale Offer',
      content: 'On all the orders above ₹ 14999',
      code: 'SUM47I',
    },
    {
      offer: '13',
      head: 'Thanksgiving Sale Offer',
      content: 'On all the orders above ₹ 500',
      code: 'THA11S',
    },
    {
      offer: '36',
      head: 'Easter Sale Offer',
      content: 'On all the orders above ₹ 8999',
      code: 'EAS73R',
    },
  ];
  return (
    <View style={responsiveStyle.mainContainer}>
      <ScrollView
        style={responsiveStyle.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <FlatList
          data={offersArray}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={responsiveStyle.mainFlatlist}
          renderItem={({item, index}) => {
            return (
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
                      {item.offer}
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
                        {item.head}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Lato-Regular',
                          color: colors.black_level_2,
                          fontSize: 13,
                        }}>
                        {item.content}
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
                      {item.code}
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
                      backgroundColor: colors.white_level_2,
                    }}></View>
                  <View
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 25 / 2,
                      backgroundColor: colors.white_level_2,
                    }}></View>
                  <View
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 25 / 2,
                      backgroundColor: colors.white_level_2,
                    }}></View>
                  <View
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 25 / 2,
                      backgroundColor: colors.white_level_2,
                    }}></View>
                </View>
                {/* END DESIGN */}
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Offers;
