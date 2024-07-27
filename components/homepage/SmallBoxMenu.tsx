import { View, Text, Image } from "react-native";
import React from "react";

interface SmallBoxMenuProps {
  title: string;
  subtitle: string;
  image: any;
}

const SmallBoxMenu: React.FC<SmallBoxMenuProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <View className="p-2 bg-[#F9F9F9] rounded-sm">
      <Text>{title}</Text>
      <View className="flex flex-row items-end mt-1">
        <Text
          className="w-24 font-bold"
          style={{
            minWidth: 96,
          }}
        >
          {subtitle}
        </Text>
        <Image source={image} className="h-6 w-7" />
      </View>
    </View>
  );
};

export default SmallBoxMenu;
