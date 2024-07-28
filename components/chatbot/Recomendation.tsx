import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

interface RecomendationProps {
  visible: boolean;
  index: number;
  menu: string;
  price: string;
  data: FoodMenus | TransportMenus;
}

const Recomendation: React.FC<RecomendationProps> = ({
  visible,
  index,
  menu,
  price,
  data,
}) => {
  return (
    <View
      className={`${
        visible ? "" : "hidden"
      } w-full bg-[#00B14F] rounded-xl p-3 items-start mt-4`}
    >
      <View className="bg-white px-2 py-1 rounded-full">
        <Text className="self-start">Rekomendasi {index + 1}</Text>
      </View>
      {data.type == "menu_makanan" && (
        <Text className="text-white mt-4">
          {index + 1}. {menu} {price}
        </Text>
      )}
      {data.type == "transportation" &&
        data.grabRide?.map((item, index) => {
          return (
            <View className="flex-row items-center">
              <Text className="text-2xl font bold text-white">·</Text>
              <Text className="ml-2 text-white">
                Naik {item.type} dengan jarak {item.total_disctance} dalam waktu
                {item.total_duration} sebesar IDR{item.price}
              </Text>
            </View>
          );
        })}
      <View className="bg-white px-2 py-1 rounded-full self-end mt-4">
        <Text className="self-start">Total: {price}</Text>
      </View>
      <View className="w-full rounded-full overflow-hidden mt-4">
        <Pressable
          className="bg-white py-1 items-center"
          android_ripple={{ color: "#CCCCCC" }}
          onPress={() => router.push(`/checkout/${price}`)}
        >
          <Text>Pesan</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Recomendation;
