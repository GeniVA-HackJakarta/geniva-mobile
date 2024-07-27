import { Text, Pressable, Image } from "react-native";
import React from "react";

interface ServiceButtonProps {
  image: any;
  text: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ image, text }) => {
  return (
    <Pressable
      className="items-center p-2 gap-y-1"
      android_ripple={{ color: "#CCCCCC" }}
    >
      <Image
        source={image}
        className="w-[12vw] h-[12vw]"
        style={{ resizeMode: "contain" }}
      />
      <Text>{text}</Text>
    </Pressable>
  );
};

export default ServiceButton;
