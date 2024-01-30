import {Image, View} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
const Splash = () => {
  const dimensions = useDimensionContext();
  responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth);
  return (
    <View style={responsiveStyle.container}>
      <Image
        source={require('../../assets/images/splash.jpg')}
        style={responsiveStyle.flashImage}
      />
    </View>
  );
};

export default Splash;
