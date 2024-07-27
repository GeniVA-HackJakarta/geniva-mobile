import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

interface AdsSwiperProps {
  title: string;
  image: any;
  subTitle: string;
  ads?: string;
}

const AdsSwiper: React.FC<AdsSwiperProps> = ({
  title,
  image,
  subTitle,
  ads,
}) => {
  return (
    <Pressable
      android_ripple={{ color: "#CCCCCC" }}
      className="w-[90vw] mr-[10vw]"
    >
      <View className="flex flex-row items-center gap-x-4">
        <Text className="text-xl font-semibold">{title}</Text>
        <View className="p-1 rounded-full bg-slate-200">
          <Icon source="arrow-right-thin" color="#000000" size={16} />
        </View>
      </View>
      <View></View>
      <Image
        source={image}
        className="w-full mt-4 rounded-md h-44"
        style={{ resizeMode: "cover" }}
      />
      <Text className="mt-4 text-base font-semibold">{subTitle}</Text>
      {ads !== undefined && (
        <Text className="text-sm">
          <Text className="text-sm font-semibold text-gray-800">Ad</Text> ·{ads}
        </Text>
      )}
    </Pressable>
  );
};

export default AdsSwiper;
