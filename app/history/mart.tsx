import { View, Text } from "react-native";
import React from "react";

interface MartProps {}

const Mart: React.FC<MartProps> = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>No Data</Text>
    </View>
  );
};

export default Mart;
