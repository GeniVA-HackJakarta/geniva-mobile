import { View, Text } from "react-native";
import React from "react";

interface FoodProps {}

const Food: React.FC<FoodProps> = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>No Data</Text>
    </View>
  );
};

export default Food;
