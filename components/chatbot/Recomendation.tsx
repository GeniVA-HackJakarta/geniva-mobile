import { View, Text, Pressable } from "react-native";
import React from "react";

interface RecomendationProps {
  visible: boolean;
  index: number;
  menu: string;
  price: string;
}

const Recomendation: React.FC<RecomendationProps> = ({
  visible,
  index,
  menu,
  price,
}) => {
  return (
    <View
      className={` ${
        visible ? "" : "hidden"
      } w-full bg-[#00B14F] rounded-xl p-3 items-start mt-4`}
    >
      <View className="bg-white px-2 py-1 rounded-full">
        <Text className="self-start">Rekomendasi {index + 1}</Text>
      </View>
      <Text className="text-white mt-4">
        {index + 1}. {menu} {price}
      </Text>
      <View className="bg-white px-2 py-1 rounded-full self-end mt-4">
        <Text className="self-start">Total: {price}</Text>
      </View>
      <View className="w-full rounded-full overflow-hidden mt-4">
        <Pressable
          className="bg-white py-1 items-center"
          android_ripple={{ color: "#CCCCCC" }}
        >
          <Text>Pesan</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Recomendation;
