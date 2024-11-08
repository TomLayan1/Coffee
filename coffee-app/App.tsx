import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import "./global.css"
import Home from './src/screens/Home';
import { CoffeeShopContextProvider } from './src/Context/Context';

export default function App() {
  return (
    <View className='flex-1 bg-darkBg pt-4'>
      <StatusBar barStyle="light-content" />
      <CoffeeShopContextProvider>
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </CoffeeShopContextProvider>
    </View>
  );
}