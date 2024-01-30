import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDimensionContext} from '../../../context';
import colors from '../../../components/common/colors';
import style from '../style';
import StarRating from 'react-native-star-rating-widget';
import {useNavigation} from '@react-navigation/native';

const ProductReview = props => {
  const {product} = props;
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const handleRedirect = () => {
    navigation.navigate('Review', {product: product});
  };
  const [rating, setRating] = useState(3);
  return (
    <View
      style={{
        marginVertical: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'Lato-regular',
            fontSize: 17,
            color: colors.black_level_3,
          }}>
          Product Review (1)
        </Text>
        <TouchableOpacity onPress={handleRedirect}>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              fontSize: 16,
              color: colors.primaryBlue,
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: colors.greenBg,
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
            source={require('../../../assets/images/goldroger.png')}
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
          onChange={() => {}}
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
            fontSize: 16,
            color: colors.black_level_3,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
    </View>
  );
};

export default ProductReview;
