import {View, Text} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const CommonSectionHeader = props => {
  const dimensions = useDimensionContext;
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const navigation = useNavigation();
  handleNavigate = () => {
    navigation.navigate('Shop', {type: 'all'});
  };

  return (
    <View style={responsiveStyle.headView}>
      <View>
        <Text style={responsiveStyle.headText}>{props.head}</Text>
        <Text style={responsiveStyle.contentText}>{props.content}</Text>
      </View>
      <Text style={responsiveStyle.seeAllText} onPress={handleNavigate}>
        {props.rightText}
      </Text>
    </View>
  );
};

export default CommonSectionHeader;
