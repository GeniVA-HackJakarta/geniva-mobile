import { View, Text, Pressable, Image, Dimensions } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

interface LargeBoxProps {
  image: any;
  title: string;
  Ad: boolean;
  position: string;
  distance?: number;
  rating?: number;
  discount?: string;
  subTitle?: string;
  price?: string;
  originalPrice?: string;
}

const LargeBox: React.FC<LargeBoxProps> = ({
  image,
  title,
  Ad,
  position,
  distance,
  rating,
  discount,
  subTitle,
  price,
  originalPrice,
}) => {
  const width = Dimensions.get("window").width;
  return (
    <Pressable
      className={`flex-1 ${position == "left" ? "mr-2" : "ml-2"}`}
      android_ripple={{ color: "#CCCCCC" }}
    >
      <Image
        source={image}
        className="w-full h-[44vw] rounded-md"
        style={{
          resizeMode: "contain",
        }}
      />
      <Text className="mt-2 text-base">{title}</Text>
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

export default LargeBox;
