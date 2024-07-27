import { Text, TextInput } from "react-native";
import React from "react";
import { Form } from "@/app/register";

interface FormInputProps {
  title: string;
  name: keyof Form;
  value: string;
  handleValue: (key: keyof Form, value: string) => void;
  valueError: string;
}

const FormInput: React.FC<FormInputProps> = ({
  title,
  name,
  value,
  handleValue,
  valueError,
}) => {
  return (
    <>
      <Text className="self-start text-[#31013F] font-semibold mt-6">
        {title}
      </Text>
      <TextInput
        className={`${
          valueError !== "" ? "border-red-500 border-[1px]" : ""
        } w-full bg-[#EDEDED] px-4 py-3 rounded-lg mt-3`}
        placeholder="Masukan nomor handphone"
        value={value}
        onChangeText={(text) => handleValue(name, text)}
      />
      {valueError !== "" && (
        <Text className="text-red-500 self-start">{valueError}</Text>
      )}
    </>
  );
};

export default FormInput;
