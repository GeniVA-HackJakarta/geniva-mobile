import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HISTORY_IMAGE from "@/static/image/history";
import Transport from "./transport";
import Food from "./food";
import Mart from "./mart";
import Finance from "./finance";
import Express from "./express";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  const [selected, setSelected] = React.useState("Transport");
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-white">
        <View className="w-full flex-row items-center px-6 py-3">
          <Pressable onPress={() => router.back()}>
            <Icon source="arrow-left" size={24} />
          </Pressable>
          <Text className="text-2xl ml-4 font-bold">Activity History</Text>
        </View>
        <View className="w-full">
          <ScrollView
            className="w-full bg-white mt-4"
            horizontal={true}
            contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
          >
            <Pressable
              className={`${
                selected === "Transport" ? "bg-[#01543A]" : "bg-[#EEF9FB]"
              } px-4 py-2 rounded-full text-white`}
              onPress={() => setSelected("Transport")}
            >
              <Text
                className={`${
                  selected === "Transport" ? "text-white" : "text-[#01543A]"
                } font-semibold `}
              >
                Transport
              </Text>
            </Pressable>
            <Pressable
              className={`${
                selected === "Food" ? "bg-[#01543A]" : "bg-[#EEF9FB]"
              } px-4 py-2 rounded-full `}
              onPress={() => setSelected("Food")}
            >
              <Text
                className={`${
                  selected === "Food" ? "text-white" : "text-[#01543A]"
                } font-semibold`}
              >
                Food
              </Text>
            </Pressable>
            <Pressable
              className={`${
                selected === "Mart" ? "bg-[#01543A]" : "bg-[#EEF9FB]"
              } px-4 py-2 rounded-full`}
              onPress={() => setSelected("Mart")}
            >
              <Text
                className={`${
                  selected === "Mart" ? "text-white" : "text-[#01543A]"
                } font-semibold`}
              >
                Mart
              </Text>
            </Pressable>
            <Pressable
              className={`${
                selected === "Finance" ? "bg-[#01543A]" : "bg-[#EEF9FB]"
              } px-4 py-2 rounded-full`}
              onPress={() => setSelected("Finance")}
            >
              <Text
                className={`${
                  selected === "Finance" ? "text-white" : "text-[#01543A]"
                } font-semibold`}
              >
                Finance
              </Text>
            </Pressable>
            <Pressable
              className={`${
                selected == "Express" ? "bg-[#01543A]" : "bg-[#EEF9FB]"
              } px-4 py-2 rounded-full`}
              onPress={() => setSelected("Express")}
            >
              <Text
                className={`${
                  selected === "Express" ? "text-white" : "text-[#01543A]"
                } font-semibold`}
              >
                Express
              </Text>
            </Pressable>
          </ScrollView>
        </View>
        <ScrollView
          className="flex-1 bg-white"
          contentContainerStyle={{ flexGrow: 1, backgroundColor: "#FFFFFFs" }}
        >
          {selected == "Transport" && <Transport />}
          {selected == "Food" && <Food />}
          {selected == "Mart" && <Mart />}
          {selected == "Finance" && <Finance />}
          {selected == "Express" && <Express />}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default index;
