import {useEffect, useRef, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useDimensionContext} from '../../context';
import {useNavigation} from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import ActionSheet from 'react-native-actions-sheet';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import style from './style';
import colors from '../../components/common/colors';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const Review = () => {
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const [rating, setRating] = useState(3);
  const actionSheetRef = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CommonHeaderRight plus={true} handlePlusIcon={openActionSheet} />
      ),
      headerLeft: () => <CommonHeaderLeft type="back" />,
      title: 'Reviews',
    });
  }, []);

  const openActionSheet = () => {
    actionSheetRef.current.show();
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={responsiveStyle.container}>
      <View
        style={{
          backgroundColor: colors.white,
          padding: 12,
          borderRadius: 5,
          marginVertical: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <Image
            source={require('../../assets/images/goldroger.png')}
            style={{
              height: 30,
              width: 30,
              resizeMode: 'contain',
              borderRadius: 25,
              overflow: 'hidden',
            }}
          />
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              fontSize: 18,
              color: colors.black,
              marginLeft: 10,
            }}>
            Gold Roger
          </Text>
        </View>
        <StarRating
          rating={rating}
          onChange={setRating}
          starSize={22}
          starStyle={{
            height: 20,
            width: 15,
            marginLeft: 2,
            marginTop: -5,
          }}
        />
        <Text
          style={{
            fontFamily: 'Lato-Regular',
            fontSize: 15,
            color: colors.black_level_3,
            // marginLeft: 10,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>

      <ActionSheet ref={actionSheetRef}>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontFamily: 'Lato-Black',
              fontSize: 20,
              color: colors.black,
            }}>
            Write a Review
          </Text>
          <StarRating
            rating={rating}
            onChange={setRating}
            starSize={35}
            starStyle={{
              height: 28,
              width: 28,
              marginLeft: -2,
              marginVertical: 5,
            }}
          />
          <CustomTextInput multiline={true} placeholder="Write here" />
          <CustomButton type="Primary" buttonText="Submit Review" />
        </View>
      </ActionSheet>
    </ScrollView>
  );
};

export default Review;
