import { useContext } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { CoffeeShopContext } from "../Context/Context";


export default function Bean() {
  // From context
  const { beanDatas } = useContext(CoffeeShopContext);

    const test = require("../assets/coffee_assets/americano/square/americano_pic_1_square.png")


  return (
    <View className="mb-7">
      <Text className="text-white text-[18px] font-bold mb-6">Coffee beans</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex-row items-center gap-4 pr-7">
          {beanDatas?.map(bean => (
            <View key={bean.id} className="bg-lightGray pt-4 pb-9 rounded-2xl w-[149px] h-[245.68px]">
              <Image source={ bean.imagelink_square} className="max-w-[126px] max-h-[126px] rounded-2xl mb-2 mx-auto" />
              <View className="w-[126px] mx-auto">
                <Text className="text-white text-[17px] mb-2">{bean.name}</Text>
                <Text className="text-white text-[10px] mb-2">{bean.roasted}</Text>
    
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-1">
                    <Text className="text-[16px] text-brownColor font-semibold">$</Text>
                    <Text className="text-[18px] text-white font-bold">4.20</Text>
                  </View>

                  <Pressable className="bg-brownColor px-[10px] py-[5px] rounded-lg">
                    <Text className="text-white text-[19px] font-bold">+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}