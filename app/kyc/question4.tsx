import {
  View,
  Text,
  Pressable,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useContext } from "react";
import { KYCContext } from "@/store/context/kycContext";
import { Link, router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderKYC from "@/components/kyc/HeaderKYC";
import { RadioButton } from "react-native-paper";
import RadioButtonItem from "@/components/kyc/RadioButtonItem";
import { QUESTION_4 } from "@/static/data/kycQuestion";
import axios from "axios";
import baseURL from "@/static/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { transformKYC } from "@/utils/stringFormatter";

interface question4Props {}

const question4: React.FC<question4Props> = () => {
  const KYCctx = useContext(KYCContext);
  const [value, setValue] = React.useState<string>(KYCctx.question4);
  const handleSelect = (value: string) => {
    KYCctx.setQuestion4(value);
    setValue(value);
  };

  const handleSubmit = async () => {
    if (value == "") {
      Alert.alert("Error", "Please select an answer");
    } else {
      const userID = await AsyncStorage.getItem("geniva_user_id");
      const token = await AsyncStorage.getItem("geniva_user_token");
      console.log(userID);
      try {
        const response = await axios.put(
          `${baseURL}/user/${userID}/kyc`,
          {
            saving: transformKYC(value),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);

        if (response.data.success) {
          ToastAndroid.show("Data saved", ToastAndroid.SHORT);
          router.push("/main");
        }
      } catch (error) {
        console.log(error);
        Alert.alert("Error", "Something went wrong");
      }
    }
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-white">
        <HeaderKYC page={2} />
        <View className="w-full flex-1 pt-8 px-[5%]">
          <Text className="text-xl">{QUESTION_4.question}</Text>
          <View className="w-full mt-6">
            {QUESTION_4.options.map((item, index) => {
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
                onPress={() => handleSubmit()}
                android_ripple={{ color: "#D0D0D0" }}
              >
                <Text className="text-[#707070]">Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default question4;
