import { View, Text, Pressable } from "react-native";
import React from "react";

interface ChipProps {}

const Chip: React.FC<ChipProps> = () => {
  const [selected, setSelected] = React.useState("Contactless Delivery");
  return (
    <View className="w-full flex-row items-center px-4 pt-4">
      <View
        className={`${
          selected === "Contactless Delivery" ? "bg-[#F6F6F6]" : "bg-white"
        } rounded-full overflow-hidden `}
      >
        <Pressable
          className="py-2 px-4"
          onPress={() => setSelected("Contactless Delivery")}
        >
          <Text
            className={`${
              selected === "Contactless Delivery"
                ? "text-[#197856]"
                : "text-[#707070]"
            } font-semibold`}
          >
            Contactless Delivery
          </Text>
        </Pressable>
      </View>

      <View
        className={`${
          selected === "Pickup" ? "bg-[#F6F6F6]" : "bg-white"
        } rounded-full overflow-hidden`}
      >
        <Pressable className="py-2 px-4" onPress={() => setSelected("Pickup")}>
          <Text
            className={`${
              selected === "Pickup" ? "text-[#197856]" : "text-[#707070]"
            } font-semibold`}
          >
            Pickup
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Chip;
