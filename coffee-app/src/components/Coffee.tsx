import { useContext } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { CoffeeShopContext } from "../Context/Context";

export default function Coffee () {
  // From context
  const { coffeeData } = useContext(CoffeeShopContext);

  const test = require("../assets/coffee_assets/americano/square/americano_pic_1_square.png")

  return (
    <View className="mb-7">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="bg-lightGray p-4 rounded-2xl">
          <View className="relative">
            <Image src={test} />
          </View>
          <View>
            <Text className="text-white">Cappuccino</Text>
            <Text className="text-white">With Steamed Milk</Text>
          </View>
          <View>
            <View>
              <Text className="text-[18px] text-brownColor">$</Text>
              <Text className="text-[18px] text-white">4.20</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}