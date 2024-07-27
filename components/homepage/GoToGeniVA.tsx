import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import HOMEPAGE_IMAGES from "@/static/image/homepage";
import { router } from "expo-router";

interface GoToGeniVAProps {}

const GoToGeniVA: React.FC<GoToGeniVAProps> = () => {
  return (
    <View className="w-full px-4 mt-6">
      <Text className="leading-6">
        Dapatkan kemudahan maksimal dengan
        <Text className="text-[#00B14F] font-black"> GeniVA </Text>untuk memesan
        Bike, Car, dan Food Anda
      </Text>
      <View className="w-full rounded-2xl overflow-hidden mt-4">
        <Pressable
          className="w-full bg-[#00B14F] py-3 px-3 flex-row items-center"
          android_ripple={{ color: "#00802D" }}
          onPress={() => router.push("/chatbot")}
        >
          <Image
            source={HOMEPAGE_IMAGES.questionMark}
            className="w-6 h-6"
            style={{ resizeMode: "contain" }}
          />
          <Text className="text-white ml-3">
            Mau pesan Bike, Car, atau Food ?
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GoToGeniVA;
