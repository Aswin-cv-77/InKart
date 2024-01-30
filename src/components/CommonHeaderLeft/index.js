import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, Image} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';

const CommonHeaderLeft = props => {
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowHeight,
    dimensions.windowWidth,
  );
  const handlePress = () => {
    if (props.type === 'back') {
      navigation.goBack();
    } else {
      navigation.toggleDrawer();
    }
  };
  return (
    <TouchableOpacity onPress={handlePress} style={responsiveStyle.container}>
      <Image
        style={responsiveStyle.image}
        source={
          props.type === 'back'
            ? require('../../assets/images/left-arrow.png')
            : require('../../assets/images/drawer.png')
        }
      />
    </TouchableOpacity>
  );
};

export default CommonHeaderLeft;
