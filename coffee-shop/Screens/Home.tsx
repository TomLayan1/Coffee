import { ScrollView, StatusBar, Text, View } from "react-native";
import HomeTop from "../Components/HomeTop";
import HomeBottom from "../Components/HomeBottom";

export default function Home() {
  return(
    <View className="flex-1 bg-darkBg">
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <HomeTop />
        <HomeBottom />
      </ScrollView>
    </View>
  )
}