import { View, Text, Pressable, Dimensions, Animated } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

interface NavbarProps {
  page: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ page, setPage }) => {
  return (
    <View className="fixed bottom-0 flex flex-row items-center w-full pt-4 pb-6 border-t-[0.5px] border-gray-400 bg-white">
      <Pressable
        className="items-center justify-center w-[20vw] gap-y-1"
        onPress={() => setPage("home")}
      >
        <Icon
          source={page == "home" ? "home-variant" : "home-variant-outline"}
          color={page == "home" ? "#33C072" : "#848484"}
          size={24}
        />
        <Text
          className={`${
            page == "home" ? "text-[#33C072] font-semibold" : "text-[#848484]"
          } text-xs`}
        >
          Home
        </Text>
      </Pressable>
      <Pressable
        className="items-center justify-center w-[20vw] gap-y-1"
        onPress={() => setPage("activity")}
      >
        <Icon
          source={
            page == "activity"
              ? "clipboard-text-clock"
              : "clipboard-text-clock-outline"
          }
          color={page == "activity" ? "#33C072" : "#848484"}
          size={24}
        />
        <Text
          className={`${
            page == "activity"
              ? "text-[#33C072] font-semibold"
              : "text-[#848484]"
          } text-xs`}
        >
          Activity
        </Text>
      </Pressable>
      <Pressable
        className="items-center justify-center w-[20vw] gap-y-1"
        onPress={() => setPage("payment")}
      >
        <Icon
          source={page == "payment" ? "wallet" : "wallet-outline"}
          color={page == "payment" ? "#33C072" : "#848484"}
          size={24}
        />
        <Text
          className={`${
            page == "payment"
              ? "text-[#33C072] font-semibold"
              : "text-[#848484]"
          } text-xs`}
        >
          Payment
        </Text>
      </Pressable>
      <Pressable
        className="items-center justify-center w-[20vw] gap-y-1"
        onPress={() => setPage("messages")}
      >
        <Icon
          source={page == "messages" ? "message-text" : "message-text-outline"}
          color={page == "messages" ? "#33C072" : "#848484"}
          size={24}
        />
        <Text
          className={`${
            page == "messages"
              ? "text-[#33C072] font-semibold"
              : "text-[#848484]"
          } text-xs`}
        >
          Messages
        </Text>
      </Pressable>
      <Pressable
        className="items-center justify-center w-[20vw] gap-y-1"
        onPress={() => setPage("account")}
      >
        <Icon
          source={
            page == "account" ? "account-circle" : "account-circle-outline"
          }
          color={page == "account" ? "#33C072" : "#848484"}
          size={24}
        />
        <Text
          className={`${
            page == "account"
              ? "text-[#33C072] font-semibold"
              : "text-[#848484]"
          } text-xs`}
        >
          Account
        </Text>
      </Pressable>
    </View>
  );
};

export default Navbar;
