import {View, Text} from 'react-native';
import {useDimensionContext} from '../../../context';
import style from './style';
import CustomTextInput from '../../../components/CustomTextInput';

const DeliveryInfo = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  return (
    <View>
      <Text style={responsiveStyle.headText}>Check Delivery</Text>
      <Text style={responsiveStyle.commonText}>
        Enter Pincode to check delivery date/pickup option
      </Text>
      <CustomTextInput
        type={'default'}
        check={true}
        onChange={() => console.warn('hello')}
        placeholder={'Pin Code'}
      />
      <Text style={responsiveStyle.commonText}>
        FREE delivery available till Sunday.
      </Text>
      <Text style={responsiveStyle.commonText}>
        Fastest delivery Tomorrow, Order within 5 hrs 41 mins.
      </Text>
      <Text style={responsiveStyle.commonText}>
        Easy 15 days return and exchange
      </Text>
    </View>
  );
};

export default DeliveryInfo;
