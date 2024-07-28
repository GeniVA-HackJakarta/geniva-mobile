import { View, Text, Pressable } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";
import { router } from "expo-router";

interface HeaderCheckoutProps {}

const HeaderCheckout: React.FC<HeaderCheckoutProps> = () => {
  return (
    <View
      className="flex-row items-center justify-center py-4 bg-white"
      style={{
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 1.51,
        elevation: 2,
      }}
    >
      <Pressable onPress={() => router.back()} className="absolute left-4">
        <Icon source="arrow-left" color="#000000" size={24} />
      </Pressable>
      <View className="items-center justify-center">
        <Text
          className="font-bold ml-4 tracking-wide text-lg"
          style={{ fontFamily: "MulishSemiBold" }}
        >
          Bhentuman Baso - Sunter Agung
        </Text>
        <Text>Delivery fee calculated at 16:30:24</Text>
      </View>
    </View>
  );
};

export default HeaderCheckout;
