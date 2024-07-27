import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

interface GeniVALoadingProps {}

const GeniVALoading: React.FC<GeniVALoadingProps> = () => {
  return (
    <View className="bg-white p-3 items-start rounded-xl w-[90%] mb-2">
      <ActivityIndicator size="large" color="#00B652" />
    </View>
  );
};

export default GeniVALoading;
