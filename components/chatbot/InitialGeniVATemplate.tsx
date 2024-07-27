import { View, Text, Pressable } from "react-native";
import React from "react";

interface InitialGeniVATemplateProps {}

const InitialGeniVATemplate: React.FC<InitialGeniVATemplateProps> = () => {
  return (
    <>
      <View className="bg-white p-3 items-start rounded-xl w-[85%] mb-2">
        <Text style={{ fontFamily: "MulishMedium" }}>
          Hai Sobat Grab, ada yang bisa dibantu hari ini?
        </Text>
      </View>
      <View className="bg-white flex-start rounded-xl w-[85%] mb-4">
        <View className="w-full border-b-[1px] border-[#D6D6D6] p-3">
          <Text className="" style={{ fontFamily: "MulishMedium" }}>
            Silakan pilih topik yang ingin kamu tanyakan
          </Text>
        </View>
        <View className="px-3 py-4">
          <Pressable>
            <Text
              className="text-[#00B24F] font-semibold mb-3"
              style={{ fontFamily: "MulishBold" }}
            >
              Pesan Grab Food
            </Text>
          </Pressable>
          <Pressable>
            <Text
              className="text-[#00B24F] font-semibold mb-3"
              style={{ fontFamily: "MulishBold" }}
            >
              Pesan Grab Ride
            </Text>
          </Pressable>
          <Pressable>
            <Text
              className="text-[#00B24F] font-semibold"
              style={{ fontFamily: "MulishBold" }}
            >
              Pesan Grab Car
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default InitialGeniVATemplate;
