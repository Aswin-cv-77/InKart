import {View, Text} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../context';

const CommonEmpty = props => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
    dimensions.isPortrait,
  );

  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.titleText}>{props.title}</Text>
    </View>
  );
};

export default CommonEmpty;
