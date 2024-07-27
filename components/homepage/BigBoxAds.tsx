import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";
import HOMEPAGE_IMAGES from "@/static/image/homepage";

interface BigBoxAdsProps {}

const BigBoxAds: React.FC<BigBoxAdsProps> = () => {
  return (
    <Pressable android_ripple={{ color: "#CCCCCC" }}>
      <View className="flex flex-row items-center gap-x-4">
        <Text className="text-xl font-semibold">Buy Now</Text>
        <View className="p-1 rounded-full bg-slate-200">
          <Icon source="arrow-right-thin" color="#000000" size={16} />
        </View>
      </View>
      <View></View>
      <Image
        source={HOMEPAGE_IMAGES.ads5}
        className="w-full mt-4 rounded-md h-44"
        style={{ resizeMode: "cover" }}
      />
      <Text className="mt-4 text-base font-semibold">Get more for less</Text>
      <Text className="text-sm">
        <Text className="text-sm font-semibold text-gray-800">Ad</Text> · Cilor
        Dan Sempol Ayam Mamah Nio
      </Text>
    </Pressable>
  );
};

export default BigBoxAds;
