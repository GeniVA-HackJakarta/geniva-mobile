import { View, Text, Image } from "react-native";
import React from "react";

interface UserMessageProps {
  text: string;
  image: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ text, image }) => {
  if (image !== "") {
    return (
      <View className="w-full items-end mb-4">
        <Image
          source={{ uri: image }}
          className="w-[80%] h-44 rounded-lg"
          style={{ resizeMode: "cover" }}
        />
      </View>
    );
  }
  return (
    <View className="w-full items-end mb-4">
      <View className="bg-[#00B14F] p-3 self-end rounded-xl w-[85%]">
        <Text className="text-white" style={{ fontFamily: "MulishMedium" }}>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default UserMessage;
