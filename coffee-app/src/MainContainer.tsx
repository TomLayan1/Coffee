import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';

// Screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from './screens/CartScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import HistoryScreen from './screens/HistoryScreen';

// Screen names
const homeName = 'Home';
const cartName = 'Cart';
const favoriteName = 'Favorite';
const historyName = 'History';

const Tab = createBottomTabNavigator();

export default function MainContainer() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home';
            } else if (rn === cartName) {
              iconName = focused ? 'shoppingcart' : 'shoppingcart';
            } else if (rn === favoriteName) {
              iconName = focused ? 'heart' : 'heart';
            } else if (rn === historyName) {
              iconName = focused ? 'bars' : 'bars';
            }

            return <AntDesign name={iconName} size={size} color={color} />;
          },

          // Customize tabBar colors, fonts, and more
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
          name={homeName}
          component={HomeScreen}
          options={{ title: homeName, headerShown: false}}
        />
        <Tab.Screen
          name={cartName}
          component={CartScreen}
          options={{ title: cartName, headerShown: false}}
        />
        <Tab.Screen
          name={favoriteName}
          component={FavoriteScreen}
          options={{ title: favoriteName, headerShown: false}}
        />
        <Tab.Screen
          name={historyName} 
          component={HistoryScreen}
          options={{ title: historyName, headerShown: false}}
        />
        {/* Add other screens here if needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
