import {useState} from 'react';
import {View, Text} from 'react-native';
import {useDimensionContext} from '../../../context';
import colors from '../../../components/common/colors';
import Accordion from 'react-native-collapsible/Accordion';

import AntDesign from 'react-native-vector-icons/AntDesign';
import style from './style';

const ExtraInfo = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const [actSections, setActSections] = useState([0]);

  const DetailsArray = [
    {
      title: 'Manufacture Details',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      title: 'Product Disclaimer',
      content: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      title: 'Features & Details',
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
    },
  ];
  const _renderHeader = sections => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          //   marginVertical: 5,
        }}>
        <Text style={responsiveStyle.titleText}>{sections.title}</Text>
        <AntDesign name="down" size={25} color={colors.darkGreen} />
      </View>
    );
  };
  const _renderContent = sections => {
    return (
      <View>
        <Text style={responsiveStyle.contentText}>{sections.content}</Text>
      </View>
    );
  };
  const _updateSections = activeSections => {
    setActSections(activeSections);
  };
  return (
    <>
      <Accordion
        activeSections={actSections}
        sections={DetailsArray}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        underlayColor={'transparent'}
        sectionContainerStyle={{
          paddingVertical: 10,
          borderBottomColor: colors.greenGlow,
          borderBottomWidth: 1,
        }}
      />
    </>
  );
};

export default ExtraInfo;
