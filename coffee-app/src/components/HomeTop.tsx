import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Coffee } from "../interface";

export default function HomeTop() {
  // State to select coffee
  const [currentCoffee, setCurrentCoffee] = useState<string>('All');

  const coffeeTypes: Coffee[] = [
    {
      id: 1,
      name: 'All'
    },
    {
      id: 2,
      name: 'Cappiccino'
    },
    {
      id: 3,
      name: 'Expresso'
    },
    {
      id: 4,
      name: 'Americano'
    },
    {
      id: 5,
      name: 'Macchiato'
    },
    {
      id: 6,
      name: 'Latte'
    }
  ]

  // Function to handle selecting a coffee type
  const handlePress = (id: number) => {
    const selectedCoffee = coffeeTypes.find(coffee => coffee.id === id)
    selectedCoffee && setCurrentCoffee(selectedCoffee.name)
  }

  return(
    <View className="mb-7">
      <View className="px-7">
        <Text className="text-white text-5xl font-bold leading-snug mb-8">Find the best coffee for you</Text>
        <TextInput
          style={{ color: "gray"}}
          placeholderTextColor="gray"
          className="bg-darkGray text-lg py-3 px-5 rounded-xl mb-8" placeholder="Find Your coffee.."/>
      </View>
      <View className="pl-7">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-6 pr-7">
            {coffeeTypes.map(coffee => (
              <Pressable key={coffee.id} onPress={() => handlePress(coffee.id)}>
                <Text className={`text-[16px] font-bold ${coffee.name === currentCoffee ? 'text-brownColor' : 'text-lightGray' }`}>{coffee.name}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}