import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

interface RegularBoxProps {
  image: any;
  title: string;
  Ad: boolean;
  distance?: number;
  rating?: number;
  discount?: string;
  subTitle?: string;
  price?: string;
  originalPrice?: string;
}

const RegularBox: React.FC<RegularBoxProps> = ({
  image,
  title,
  Ad,
  distance,
  rating,
  discount,
  subTitle,
  price,
  originalPrice,
}) => {
  return (
    <Pressable className="w-[40vw]" android_ripple={{ color: "#CCCCCC" }}>
      <Image
        source={image}
        className="w-[40vw] h-[30vw] rounded-md"
        style={{ resizeMode: "cover" }}
      />
      <Text className="mt-4 text-lg">{title}</Text>
      {rating !== undefined && distance !== undefined && (
        <View className="flex flex-row items-center">
          {Ad && (
            <>
              <Text className="font-semibold">Ad</Text>
              <Text className="text-xl font-bold"> · </Text>
            </>
          )}
          <Text>{distance} km</Text>
          <Text className="text-xl font-bold"> · </Text>
          <Icon source="star" color="#FFC107" size={16} />
          <Text className="">{rating}</Text>
        </View>
      )}
      {discount && (
        <Text className="bg-[#faf1ea] p-1 self-start text-xs mt-4">
          {discount} off
        </Text>
      )}
      {subTitle && <Text className="mt-1 text-sm">{subTitle}</Text>}
      <View className="flex flex-row mt-1 gap-x-1">
        {price && <Text className="text-sm font-semibold">{price}</Text>}
        {originalPrice && (
          <Text className="text-sm text-gray-400 line-through">
            {originalPrice}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default RegularBox;
