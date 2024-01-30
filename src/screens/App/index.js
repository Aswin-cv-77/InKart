import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login';
import SignUp from '../SignUp';
import LoginPhone from '../LoginPhone';
import Home from '../Home';
import {DimensionContextProvider} from '../../context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Categories from '../Categories';
import Cart from '../Cart';
import CustomDrawer from '../../components/CustomDrawer';
import CustomFooter from '../../components/CustomFooter';
import Search from '../Search';
import Offers from '../Offers';
import Orders from '../Orders';
import Account from '../Account';
import Wishlist from '../Wishlist';
import {useSelector, Provider} from 'react-redux';
import {store} from '../../storage/store';
import Splash from '../Splash';
import Shop from '../Shop';
import ProductDetails from '../ProductDetails';
import Review from '../Review';

const AppStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Menu"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: {fontFamily: 'Lato-Bold', fontSize: 22},
        headerStyle: {
          height: 60,
        },
      }}>
      <Drawer.Screen
        name="Menu"
        component={AppFooter}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Shop" component={Shop} />
      <Drawer.Screen name="ProductDetails" component={ProductDetails} />
      <Drawer.Screen name="Review" component={Review} />
    </Drawer.Navigator>
  );
};

const Footer = createBottomTabNavigator();
const AppFooter = () => {
  const navigation = useNavigation();
  return (
    <Footer.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: {fontFamily: 'Lato-Bold', fontSize: 20},
      }}
      tabBar={props => <CustomFooter {...props} />}>
      <Footer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Footer.Screen name="Categories" component={Categories} />
      <Footer.Screen name="Search" component={Search} />
      <Footer.Screen name="Offers" component={Offers} />
      <Footer.Screen name="Cart" component={Cart} />
    </Footer.Navigator>
  );
};

const AppNavigation = () => {
  const {isLoggedIn} = useSelector(state => state);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [isLoggedIn]);
  return (
    <DimensionContextProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{headerShown: false}}>
          {loading ? (
            <AppStack.Screen name="Splash" component={Splash} />
          ) : (
            <>
              {isLoggedIn ? (
                <AppStack.Screen name="AppDrawer" component={AppDrawer} />
              ) : (
                <>
                  <AppStack.Screen name="Login" component={Login} />
                  <AppStack.Screen name="SignUp" component={SignUp} />
                  <AppStack.Screen name="LoginPhone" component={LoginPhone} />
                </>
              )}
            </>
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </DimensionContextProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
