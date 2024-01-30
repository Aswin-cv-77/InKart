import {View, Text} from 'react-native';
import colors from '../../../../components/common/colors';
import {useDimensionContext} from '../../../../context';
import style from './style';

const OrderTotal = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
    dimensions.isPortrait,
  );
  return (
    <View>
      <View style={responsiveStyle.container}>
        <View>
          <Text style={responsiveStyle.head}>Order Details</Text>
          <Text style={responsiveStyle.content}>Bag Total</Text>
          <Text style={responsiveStyle.content}>Bag Savings</Text>
          <Text style={responsiveStyle.content}>Coupon Discounts</Text>
          <Text style={responsiveStyle.endContent}>Delivery</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={responsiveStyle.headEnd}>.</Text>
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              fontSize: 18,
              color: colors.black,
              lineHeight: 30,
            }}>
            ₹ 100.00
          </Text>
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              fontSize: 18,
              color: colors.primaryGreen,
              lineHeight: 30,
            }}>
            ₹ 0.00
          </Text>
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              fontSize: 18,
              color: colors.red,
              lineHeight: 30,
            }}>
            Apply Coupon
          </Text>
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              fontSize: 18,
              color: colors.black,
              lineHeight: 30,
              marginBottom: 10,
            }}>
            ₹ 100.00
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={responsiveStyle.total}>Order Total</Text>
        <Text style={responsiveStyle.total}>₹ 100.00</Text>
      </View>
    </View>
  );
};

export default OrderTotal;
