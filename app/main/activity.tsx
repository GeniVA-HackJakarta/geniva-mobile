import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import HOMEPAGE_IMAGES from "@/static/image/homepage";
import { Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack } from "expo-router";

interface ActivityProps {}

const Activity: React.FC<ActivityProps> = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <View className="absolute top-12 left-0 right-0 flex-row justify-between px-6">
          <Text className="text-2xl font-bold">Activity</Text>
          <Pressable
            className="flex-row items-center rounded-full px-3 py-2 bg-[#EEF9FB]"
            onPress={() => router.push("/history")}
          >
            <Icon source="history" size={16} />
            <Text className="font-bold ml-2">History</Text>
          </Pressable>
        </View>
        <Image source={HOMEPAGE_IMAGES.paper} />
        <Text className="text-2xl">Nothing's happening now</Text>
        <Text className="mt-2">
          When you use our services, you'll see them here.
        </Text>
      </SafeAreaView>
    </>
  );
};

export default Activity;
