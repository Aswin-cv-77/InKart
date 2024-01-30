import {View, Text} from 'react-native';
import {useDimensionContext} from '../../../context';
import colors from '../../../components/common/colors';
import style from '../style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MoreInfo = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.greenBg,
          marginHorizontal: 5,
          width: '45%',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Lato-Regular',
            color: colors.black_level_1,
          }}>
          500g/₹ 24.00
        </Text>
        <AntDesign name="down" size={25} color={colors.darkGreen} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.greenBg,
          marginHorizontal: 5,
          width: '45%',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Lato-Regular',
            color: colors.black_level_1,
          }}>
          Delivery Time
        </Text>
        <AntDesign name="down" size={25} color={colors.darkGreen} />
      </View>
      <View></View>
    </View>
  );
};

export default MoreInfo;
