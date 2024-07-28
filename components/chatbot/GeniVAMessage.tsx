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
  data: FoodMenus | TransportMenus;
}

const GeniVAMessage: React.FC<GeniVAMessageProps> = ({
  loading,
  newResponse,
  description,
  data,
}) => {
  const [recomendationVisible, setRecomendationVisible] = React.useState(false);
  console.log("Data in genivaMessage: ", data);
  console.log("newResponse in genivaMessage: ", newResponse);
  console.log("description in genivaMessage: ", description);
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
            {data && data.type == "menu_makanan"
              ? data.description
              : "Berikut saran untuk anda"}
            {data &&
              (data.type == "promotion" ||
                data.type == "common_conversation") &&
              data.description}
          </TypeWriter>
          {data.type == "menu_makanan" ||
            (data.type == "transportation" &&
              recomendation.map((item, index) => (
                <Recomendation
                  visible={recomendationVisible}
                  key={index}
                  index={index}
                  menu={item.menu}
                  price={item.price}
                  data={data}
                />
              )))}
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
              data={data}
            />
          ))}
        </>
      )}
    </View>
  );
};

export default GeniVAMessage;
