import { StatusBar, View } from 'react-native';
import "./global.css"
import MainContainer from './src/MainContainer';
import { CoffeeShopContextProvider } from './src/Context/Context';

export default function App() {
  return (
    <View className='flex-1 bg-darkBg'>
      <StatusBar barStyle="light-content" />
      <CoffeeShopContextProvider>
        <MainContainer />
      </CoffeeShopContextProvider>
    </View>
  );
}