import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import KYC_IMAGES from "@/static/image/kyc";
import { Icon } from "react-native-paper";
import { router } from "expo-router";

interface HeaderKYCProps {
  page: number;
}

const HeaderKYC: React.FC<HeaderKYCProps> = ({ page }) => {
  const handleBack = () => {
    if (page === 1) {
      router.replace("/main");
    } else {
      router.back();
    }
  };
  return (
    <View className="flex-row items-center justify-between px-[5%] py-4">
      <Pressable onPress={() => handleBack()}>
        <Image source={KYC_IMAGES.back} className="w-9 h-9" />
      </Pressable>
      <View className="items-center justify-center">
        <Text className="text-base font-semibold">Cek Profil Tabungan</Text>
        <Text className="text-sm">Tingkat Pembulatan Transaksi</Text>
      </View>
      <Pressable onPress={() => router.push("/main")}>
        <Icon source="close" size={36} />
      </Pressable>
    </View>
  );
};

export default HeaderKYC;
