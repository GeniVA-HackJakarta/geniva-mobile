import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import CHATBOT_IMAGES from "@/static/image/chatbot";
import { Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderCheckout from "@/components/checkout/HeaderCheckout";
import Chip from "@/components/checkout/CheckoutChip";
import CHECKOUT_IMAGES from "@/static/image/checkout";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  const [deliveryOptions, setDeliveryOptions] = React.useState("Standard");
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-white">
        <HeaderCheckout />
        <ScrollView className="flex-1">
          <Chip />
          <View className="flex-row items-center mt-8">
            <View className="w-[15%] items-center">
              <Image source={CHECKOUT_IMAGES.location} className="w-6 h-6" />
            </View>
            <View className="flex-1">
              <Text className="font-bold">No. 32 Jalan Teratai</Text>
              <Text className="text-xs">
                Jl. Teratai No. 32, Sunter Agung, Tanjung Priok, ko..
              </Text>
            </View>
            <View className="pr-[5%] items-center">
              <Icon source="chevron-right" color="#838383" size={24} />
            </View>
          </View>
          <View className="pl-[15%] pr-[5%] mt-4">
            <View className="bg-[#F6F6F6] flex-row items-center py-4 px-3 justify-between rounded-lg">
              <Text className="text-xs">
                Add address details and delivery instructions
              </Text>
              <Pressable>
                <Text className="text-xs font-bold text-[#1472B0]">Edit</Text>
              </Pressable>
            </View>
          </View>

          {/* Divider */}
          <View className="border-t-[1px] border-[#EFEFEF] self-center w-[90%] mt-6"></View>

          {/* Delivery Options  */}
          <View className="flex-row px-[5%] items-center py-4">
            <Image source={CHECKOUT_IMAGES.delivery} className="w-12 h-12" />
            <View>
              <Text className="font-bold">Delivery options</Text>
              <Text className="text-xs mt-1 text-[#474747]">
                Distance from you: 0.5 km
              </Text>
            </View>
          </View>

          <Pressable
            className={`${
              deliveryOptions == "Priority"
                ? "border-[#2B9565]"
                : "border-[#E7E7E7]"
            } rounded-xl p-3 mx-[5%] border-[1px]`}
            onPress={() => setDeliveryOptions("Priority")}
          >
            <View className="w-full flex-row justify-between items-center">
              <View>
                <View className="flex-row items-center">
                  <Text className="font-bold">Priority</Text>
                  <Text className="font-black ml-2 text-xl">·</Text>
                  <Text className="ml-2">&lt; 17 mins</Text>
                  <View className="ml-2">
                    <Icon
                      source="information-outline"
                      color="#838383"
                      size={16}
                    />
                  </View>
                </View>
                <Text className="mt-2 text-[#777777]">
                  Delivered directly to you with no stops
                </Text>
                <Text className="text-[#777777]">
                  between. You will get a voucher if it's late
                </Text>
              </View>
              <Text>17.000</Text>
            </View>
          </Pressable>

          <Pressable
            className={`${
              deliveryOptions == "Standard"
                ? "border-[#2B9565]"
                : "border-[#E7E7E7]"
            } rounded-xl p-3 mx-[5%] border-[1px] mt-4`}
            onPress={() => setDeliveryOptions("Standard")}
          >
            <View className="w-full flex-row justify-between items-center">
              <View>
                <View className="flex-row items-center">
                  <Text className="font-bold">Standard</Text>
                  <Text className="font-black ml-2 text-xl">·</Text>
                  <Text className="ml-2">&lt; 20 mins</Text>
                </View>
              </View>
              <Text>13.000</Text>
            </View>
          </Pressable>

          <Pressable
            className={`${
              deliveryOptions == "Saver"
                ? "border-[#2B9565]"
                : "border-[#E7E7E7]"
            } rounded-xl p-3 mx-[5%] border-[1px] mt-4`}
            onPress={() => setDeliveryOptions("Saver")}
          >
            <View className="w-full flex-row justify-between items-center">
              <View>
                <View className="flex-row items-center">
                  <Text className="font-bold">Saver</Text>
                  <Text className="font-black ml-2 text-xl">·</Text>
                  <Text className="ml-2">&lt; 35 mins</Text>
                  <View className="ml-2">
                    <Icon
                      source="information-outline"
                      color="#838383"
                      size={16}
                    />
                  </View>
                </View>
              </View>
              <Text>4.000</Text>
            </View>
          </Pressable>

          <Pressable
            className={`${
              deliveryOptions == "Order for later"
                ? "border-[#2B9565]"
                : "border-[#E7E7E7]"
            } rounded-xl p-3 mx-[5%] border-[1px] mt-4`}
            onPress={() => setDeliveryOptions("Order for later")}
          >
            <Text className="font-bold">Order for later</Text>
          </Pressable>

          <View className="px-[5%] flex-row items-center justify-between mt-6">
            <View className="">
              <Text className="font-semibold text-2xl">Total</Text>
              <Text className="mt-2">saved Rp1.750</Text>
            </View>
            <View className="">
              <View className="flex-row text-[#6E6E6E] items-end justify-end">
                <Text className="text-end">Rp48.250</Text>
                <Text className="text-end text-lg font-semibold ml-2">
                  Rp50.000
                </Text>
              </View>
              <Text className="mt-2">You will save Rp1,750 to Superbank</Text>
              <Text className="mt-2 text-right line-through text-[#5F5F5F]">
                Rp50.000
              </Text>
            </View>
          </View>

          <View className="px-[5%] mt-6 mb-6">
            <View className="overflow-hidden w-full">
              <Pressable
                className="w-full bg-[#00B14F] rounded-lg py-4 items-center"
                android_ripple={{ color: "#00802D" }}
              >
                <Text className="font-bold text-white">Place Order</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default index;
