import { Text, View } from "react-native";
import Coffee from "./Coffee";
import Bean from "./Bean";

export default function HomeBottom () {
  
  return(
    <View className="pl-7">
      <Coffee />
      <Bean />
    </View>
  )
}