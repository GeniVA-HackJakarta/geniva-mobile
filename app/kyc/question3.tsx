import { View, Text, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import { KYCContext } from "@/store/context/kycContext";
import { Link, router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderKYC from "@/components/kyc/HeaderKYC";
import { RadioButton } from "react-native-paper";
import RadioButtonItem from "@/components/kyc/RadioButtonItem";
import { QUESTION_3 } from "@/static/data/kycQuestion";

interface question3Props {}

const question3: React.FC<question3Props> = () => {
  const KYCctx = useContext(KYCContext);
  const [value, setValue] = React.useState<string>(KYCctx.question3);
  const handleSelect = (value: string) => {
    KYCctx.setQuestion3(value);
    setValue(value);
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-white">
        <HeaderKYC page={2} />
        <View className="w-full flex-1 pt-8 px-[5%]">
          <Text className="text-xl">{QUESTION_3.question}</Text>
          <View className="w-full mt-6">
            {QUESTION_3.options.map((item, index) => {
              return (
                <RadioButtonItem
                  key={index}
                  title={item}
                  value={item}
                  handleSelect={handleSelect}
                  selected={value === item}
                />
              );
            })}
          </View>
          <View
            className="absolute bottom-0 left-0 right-0 bg-white p-6"
            style={{
              elevation: 5,
            }}
          >
            <View className="overflow-hidden rounded-xl w-full">
              <Pressable
                className="bg-[#F0F0F0] w-full items-center py-2"
                onPress={() => router.push("/kyc/question4")}
                android_ripple={{ color: "#D0D0D0" }}
              >
                <Text className="text-[#707070]">Selanjutnya</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default question3;
