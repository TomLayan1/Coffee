import { ScrollView, Text, View } from "react-native";
import HomeTop from "../components/HomeTop";
import HomeBottom from "../components/HomeBottom";

export default function HomeScreen() {
  return(
    <View className="className='flex-1 bg-darkBg p-10">
      <ScrollView>
        <HomeTop />
        <HomeBottom />
      </ScrollView>
    </View>
  )
}