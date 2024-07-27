import { View, Text, Pressable } from "react-native";
import React from "react";

interface RadioButtonItemProps {
  selected: boolean;
  title: string;
  value: string;
  handleSelect: (value: string) => void;
}

const RadioButtonItem: React.FC<RadioButtonItemProps> = ({
  selected,
  title,
  value,
  handleSelect,
}) => {
  return (
    <Pressable
      className="w-full bg-[#F9F9F9] py-3 px-3 flex-row items-center mb-4"
      onPress={() => handleSelect(value)}
    >
      <View className="w-6 h-6 rounded-full border-[1px] items-center justify-center">
        {selected && <View className="w-4 h-4 rounded-full bg-black"></View>}
      </View>
      <Text className="ml-3">{title}</Text>
    </Pressable>
  );
};

export default RadioButtonItem;
