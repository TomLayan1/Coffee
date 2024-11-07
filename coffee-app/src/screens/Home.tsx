import { Text, View } from "react-native";
import HomeTop from "../components/HomeTop";
import HomeBottom from "../components/HomeBottom";

export default function Home() {
  return(
    <View className="p-10">
      <HomeTop />
      <HomeBottom />
    </View>
  )
}