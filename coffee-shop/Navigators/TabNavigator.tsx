import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';

// Screen
import Home from "../Screens/Home";
import Cart from "../Screens/Cart";
import Favourite from "../Screens/Favourite";
import History from "../Screens/History";

const homeName: string = 'Home'
const cartName: string = 'Cart'
const favouriteName: string = 'Favourite'
const historyName: string = 'History'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home';
          } else if (rn === cartName) {
            iconName = focused ? 'shoppingcart' : 'shoppingcart';
          } else if (rn === favouriteName) {
            iconName = focused ? 'heart' : 'heart';
          } else if (rn === historyName) {
            iconName = focused ? 'bars' : 'bars';
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: '#D17842',  // Active icon color
        tabBarInactiveTintColor: '#ffffff', // Inactive icon color
        tabBarStyle: {
          backgroundColor: '#0C0F14', // Background color of the tab bar
          paddingBottom: 3,
          height: 60,
          borderColor: '#0C0F14'
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: '#0C0F14', // Background color of the header (navigation bar)
        },
        headerTintColor: '#ffffff', // Text color of the header
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      ></Tab.Screen>

      <Tab.Screen
        name='Cart'
        component={Cart}
        options={{ headerShown: false }}
      ></Tab.Screen>

      <Tab.Screen
        name='Favourite'
        component={Favourite}
        options={{ headerShown: false }}
      ></Tab.Screen>

      <Tab.Screen
        name='History'
        component={History}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}