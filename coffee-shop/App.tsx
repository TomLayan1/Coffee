import "./global.css"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { CoffeeShopContextProvider } from "./Context/Context";


// Screen
import Details from './Screens/Details';
import Payment from './Screens/Payment';

// Navigation
import TabNavigation from "./Navigators/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CoffeeShopContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Tab' screenOptions={{ headerShown: true }}>
          <Stack.Screen
          name='Tab'
          component={TabNavigation}
          options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
          name='Details'
          component={Details}
          ></Stack.Screen>

          <Stack.Screen
          name='Payment'
          component={Payment}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </CoffeeShopContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
