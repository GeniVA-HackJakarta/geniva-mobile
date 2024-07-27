import { View, Text } from "react-native";
import React from "react";

interface ActivityProps {}

const Activity: React.FC<ActivityProps> = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text>Activity</Text>
    </View>
  );
};

export default Activity;
