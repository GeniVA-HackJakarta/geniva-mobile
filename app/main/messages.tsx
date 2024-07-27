import { View, Text } from "react-native";
import React from "react";

interface MessagesProps {}

const Messages: React.FC<MessagesProps> = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text>Messages</Text>
    </View>
  );
};

export default Messages;
