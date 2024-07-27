import { View, Dimensions } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

const ScrollViewRightEndButton = () => {
  const width = Dimensions.get("window").width;
  return (
    <View className="flex flex-row items-center px-5">
      <View
        className="p-2 bg-white rounded-full"
        style={{
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: 4,
        }}
      >
        <Icon source="arrow-right" color="#000000" size={width * 0.08} />
      </View>
    </View>
  );
};

export default ScrollViewRightEndButton;
