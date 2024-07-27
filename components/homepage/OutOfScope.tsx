import { View, Text, Image } from "react-native";
import React from "react";
import HOMEPAGE_IMAGES from "@/static/image/homepage";

interface OutOfScopeProps {}

const OutOfScope: React.FC<OutOfScopeProps> = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={HOMEPAGE_IMAGES.paper} />
      <Text className="mt-4 text-2xl">Out of Scope</Text>
    </View>
  );
};

export default OutOfScope;
