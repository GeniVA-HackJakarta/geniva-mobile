import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import CHATBOT_IMAGES from "@/static/image/chatbot";

interface ChatBotHeaderProps {}

const ChatBotHeader: React.FC<ChatBotHeaderProps> = () => {
  return (
    <View className="flex-row items-center px-5 py-4 bg-white">
      <Pressable onPress={() => router.back()}>
        <Image
          source={CHATBOT_IMAGES.chevronLeft}
          className="w-5 h-5"
          style={{ resizeMode: "contain" }}
        />
      </Pressable>

      <Image
        source={CHATBOT_IMAGES.user}
        className="ml-4 w-7 h-7"
        style={{ resizeMode: "contain" }}
      />
      <Text
        className="font-bold ml-4 tracking-wide text-lg"
        style={{ fontFamily: "MulishSemiBold" }}
      >
        Tanya GeniVA
      </Text>
    </View>
  );
};

export default ChatBotHeader;
