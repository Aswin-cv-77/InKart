import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image, Share} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../common/colors';
import {useSelector} from 'react-redux';

const CommonHeaderRight = props => {
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
  );
  const {cartCount} = useSelector(state => state);

  const handlePress = async type => {
    if (type === 'cart') {
      navigation.navigate('Cart');
    } else if (type === 'share') {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    }
  };

  return (
    <View style={responsiveStyle.mainContainer}>
      {props.share ? (
        <TouchableOpacity
          onPress={() => handlePress('share')}
          style={responsiveStyle.container}>
          <Feather name="share-2" size={32} color="#000" />
        </TouchableOpacity>
      ) : null}
      {props.plus ? (
        <TouchableOpacity
          onPress={props.handlePlusIcon}
          style={responsiveStyle.plusContainer}>
          <Feather name="plus-square" size={35} color={colors.black_level_3} />
        </TouchableOpacity>
      ) : null}
      {props.cart ? (
        <TouchableOpacity
          onPress={() => handlePress('cart')}
          style={responsiveStyle.container}>
          <View style={responsiveStyle.countView}>
            <Text style={responsiveStyle.countText}>{cartCount}</Text>
          </View>
          <Image
            style={responsiveStyle.cartIcon}
            source={require('../../assets/images/cart.png')}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CommonHeaderRight;
