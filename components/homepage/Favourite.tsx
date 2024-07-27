import { Pressable } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";

const Favourite = () => {
  return (
    <Pressable
      className="p-4 bg-white shadow-2xl rounded-r-xl"
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
      <Icon source="cards-heart-outline" color="#000000" size={22} />
    </Pressable>
  );
};

export default Favourite;
