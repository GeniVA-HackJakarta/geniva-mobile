import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface ChallengeBoxProps {
  image: any;
  title: string;
  end: string;
}

const ChallengeBox: React.FC<ChallengeBoxProps> = ({ image, title, end }) => {
  return (
    <View className="border-[1px] pl-2 pr-4 py-4 border-[#e8e8e8] rounded-md flex-row gap-x-3">
      <Image source={image} className="w-12 h-12" />
      <View className="gap-y-2">
        <Text className="text-base font-bold text-black">{title}</Text>
        <Text className="text-xs">Ends on {end}</Text>
        <Link href="/" className="text-[#256bb7] font-bold">
          Accept this challenge
        </Link>
      </View>
    </View>
  );
};

export default ChallengeBox;
