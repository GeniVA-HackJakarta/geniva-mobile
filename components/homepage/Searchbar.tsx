import { View, Text, Pressable } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";
import TypeWriter from "react-native-typewriter";

type typingType = 0 | 1 | -1;

const Searchbar = () => {
  const [typing, setTyping] = React.useState<typingType>(1);
  const [searchTypingText, setSearchTypingText] =
    React.useState<string>("food");
  const handleChangeTyping = () => {
    if (typing === 1) {
      setTimeout(() => setTyping(-1), 1000);
    } else if (typing === -1) {
      setSearchTypingText((prev) => (prev === "food" ? "places" : "food"));
      setTimeout(() => setTyping(1), 1000);
    }
  };
  return (
    <Pressable
      className="flex-1 rounded-l-xl rounded-r-none bg-white ml-4 border-r-gray-500 border-r-[1px] relative"
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
      <View className="absolute flex flex-row items-center w-full h-full pl-4">
        <Icon source="magnify" color="#000000" size={26} />
        <Text className="ml-2">Search</Text>
        <TypeWriter
          typing={typing}
          onTypingEnd={() => handleChangeTyping()}
          className="ml-1"
          minDelay={100}
        >
          {searchTypingText}
        </TypeWriter>
      </View>
    </Pressable>
  );
};

export default Searchbar;
