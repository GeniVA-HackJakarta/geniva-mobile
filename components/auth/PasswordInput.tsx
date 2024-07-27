import { Pressable, Text, TextInput, View } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

interface PasswordInputProps {
  title: string;
  value: string;
  handleValue: (value: string) => void;
  valueError: string;
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  title,
  value,
  handleValue,
  valueError,
  showPassword,
  setShowPassword,
}) => {
  return (
    <>
      <Text className="self-start text-[#31013F] font-semibold mt-6">
        {title}
      </Text>
      <View className="relative w-full">
        <TextInput
          className={`${
            valueError !== "" ? "border-red-500 border-[1px]" : ""
          } w-full bg-[#EDEDED] px-4 py-3 rounded-lg mt-3`}
          placeholder="Masukan nomor handphone"
          value={value}
          onChangeText={(text) => handleValue(text)}
          secureTextEntry={!showPassword}
        />
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-8"
        >
          <Icon
            source={showPassword ? "eye-outline" : "eye-off-outline"}
            size={16}
          />
        </Pressable>
      </View>
      {valueError !== "" && (
        <Text className="text-red-500 self-start">{valueError}</Text>
      )}
    </>
  );
};

export default PasswordInput;
