import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";
import HISTORY_IMAGE from "@/static/image/history";

interface transportProps {}

const Transport: React.FC<transportProps> = () => {
  return (
    <>
      <View className="flex-row items-start py-8">
        <View className="w-[20%] items-center">
          <Image source={HISTORY_IMAGE.car} className="w-7 h-7" />
        </View>

        <View className="w-[55%]">
          <Text className="font-semibold">
            Jackal Holidays Dipatiukur 89 to No.16 Jalan Tubagus Ismail 1
          </Text>
          <Text className="text-[#6F6F6F] font-semibold mt-2">
            17 Apr 2024, 19:24
          </Text>
          <View className="flex-row items-center mt-4">
            <Pressable>
              <Text className="font-bold text-[#0A6FD3]">Rebook</Text>
            </Pressable>
            <View className="p-1 bg-[#E9F8FC] rounded-full ml-2">
              <Icon source="arrow-right" color="#0A6FD3" size={12} />
            </View>
          </View>
        </View>
        <View className="w-[25%] items-center">
          <Text className="text-[#222222] font-semibold">Rp13.000</Text>
          <Text className="text-[#6F6F6F] font-semibold">+26 points</Text>
        </View>
      </View>
    </>
  );
};

export default Transport;
