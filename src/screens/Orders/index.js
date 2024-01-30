import {useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import CustomSearch from '../../components/CustomSearch';
import colors from '../../components/common/colors';
import {useNavigation} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';

const Orders = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);
  const Dimensions = useDimensionContext();
  const responsiveStyle = style(
    Dimensions.windowWidth,
    Dimensions.windowHeight,
    Dimensions.isPortrait,
  );
  const ordersArray = [
    {
      id: '0',
      orderId: '#QWE123',
      orderDate: '02/11/2023, 19:30',
      address1: '80 Trafalgar Rd, Greenwich, London',
      address2: 'SE10 9UX, UK',
      price: '1199.00',
      quantity: '3',
    },
    {
      id: '1',
      orderId: 'RTX490',
      orderDate: '27/10/2023, 23:12',
      address1: '110 Myddleton Rd, Haringey, London',
      address2: 'N22 8NE, UK',
      price: '14200.00',
      quantity: '2',
    },
    {
      id: '2',
      orderId: '#UIO789',
      orderDate: '20/10/2023, 14:05',
      address1: '100 Prestons Rd, Poplar, London',
      address2: 'E14 9RL, UK',
      price: '1500.00',
      quantity: '5',
    },
    {
      id: '3',
      orderId: '#ASD098',
      orderDate: '03/10/2023, 09:45',
      address1: '96 Trafalgar Rd, Greenwich, London',
      address2: 'SE10 9UW, UK',
      price: '660.00',
      quantity: '1',
    },
    {
      id: '4',
      orderId: '#GRA966',
      orderDate: '25/10/2023, 00:15',
      address1: '40 Tavistock St, Covent Garden, London',
      address2: 'WC2E 7PB, UK',
      price: '260.00',
      quantity: '1',
    },
  ];
  return (
    <View style={responsiveStyle.mainContainer}>
      <CustomSearch filter={true} />
      <FlatList
        data={ordersArray}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={responsiveStyle.touchContainer}>
              <View style={responsiveStyle.innerView}>
                <View>
                  <Text style={responsiveStyle.idText}>ID: {item.orderId}</Text>
                  <Text style={responsiveStyle.dateText}>
                    Ordered on : {item.orderDate}
                  </Text>
                  <Text style={responsiveStyle.addressText}>
                    {item.address1}
                  </Text>
                  <Text style={responsiveStyle.addressText}>
                    {item.address2}
                  </Text>
                  <Text style={responsiveStyle.paidText}>
                    Paid:{' '}
                    <Text style={responsiveStyle.greenText}>{item.price}</Text>,
                    Items:{' '}
                    <Text style={responsiveStyle.greenText}>
                      {item.quantity}
                    </Text>
                  </Text>
                </View>
                <Image
                  source={require('../../assets/images/map.jpeg')}
                  style={responsiveStyle.mapImage}
                />
              </View>
              <View style={responsiveStyle.bottomView}>
                <Text style={responsiveStyle.shippedText}>Order Shipped</Text>
                <Text style={responsiveStyle.reviewText}>
                  Rate and Review Products
                </Text>
                <View></View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

export default Orders;
