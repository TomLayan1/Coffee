import { StatusBar, Text, View } from 'react-native';
import "./global.css"
import Home from './src/screens/Home';
import { CoffeeShopContextProvider } from './src/Context/Context';

export default function App() {
  return (
    <View className='flex-1 bg-darkBg pt-4'>
      <StatusBar barStyle="light-content" />
      <CoffeeShopContextProvider>
        <Home />
      </CoffeeShopContextProvider>
    </View>
  );
}