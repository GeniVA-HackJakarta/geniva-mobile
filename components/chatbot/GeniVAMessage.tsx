import { View, Text, Pressable } from "react-native";
import React from "react";
import Recomendation from "./Recomendation";
import { ActivityIndicator } from "react-native-paper";
import TypeWriter from "react-native-typewriter";

const recomendation = [
  {
    menu: "Es Krim A",
    price: "Rp20,000",
  },
  {
    menu: "Es Teh Manis A",
    price: "Rp30,000",
  },
  {
    menu: "Es Teh Tawar A",
    price: "Rp10,000",
  },
];

interface GeniVAMessageProps {
  loading: boolean;
  newResponse: boolean;
  description: string;
}

const GeniVAMessage: React.FC<GeniVAMessageProps> = ({
  loading,
  newResponse,
  description,
}) => {
  const [recomendationVisible, setRecomendationVisible] = React.useState(false);
  return (
    <View
      className={`${
        loading ? "w-16 items-center" : "w-[90%] items-start"
      } bg-white p-3 rounded-xl mb-2`}
    >
      {loading ? (
        <ActivityIndicator size={24} color="#00B652" />
      ) : newResponse ? (
        <>
          <TypeWriter
            typing={1}
            onTypingEnd={() => setRecomendationVisible(true)}
            style={{ fontFamily: "MulishMedium" }}
          >
            Halo kak, sebentar GeniVA akan membantu melegakan
          </TypeWriter>
          {recomendation.map((item, index) => (
            <Recomendation
              visible={recomendationVisible}
              key={index}
              index={index}
              menu={item.menu}
              price={item.price}
            />
          ))}
        </>
      ) : (
        <>
          <Text style={{ fontFamily: "MulishMedium" }}>
            Halo kak, sebentar GeniVA akan membantu melegakan
          </Text>
          {recomendation.map((item, index) => (
            <Recomendation
              visible={true}
              key={index}
              index={index}
              menu={item.menu}
              price={item.price}
            />
          ))}
        </>
      )}
    </View>
  );
};

export default GeniVAMessage;
