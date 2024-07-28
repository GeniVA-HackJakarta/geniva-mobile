import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatBotHeader from "@/components/chatbot/ChatBotHeader";
import InitialGeniVATemplate from "@/components/chatbot/InitialGeniVATemplate";
import UserMessage from "@/components/chatbot/UserMessage";
import * as ImagePicker from "expo-image-picker";
import GeniVAMessage from "@/components/chatbot/GeniVAMessage";
import axios from "axios";
import baseURL from "@/static/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";

interface conversation {
  sender: string; // geniva | user
  message: string;
  image: string;
  description: string;
  loading: boolean;
  data?: FoodMenus | TransportMenus;
}

interface indexProps {}

const index: React.FC<indexProps> = () => {
  const [images, setImages] = React.useState<string[]>([]);
  const [newImage, setNewImage] = React.useState<string>("");

  const [messages, setMessages] = React.useState<any[]>([]);
  const [newMessages, setNewMessages] = React.useState<string>("");

  const [conversations, setConversations] = React.useState<conversation[]>([]);

  const [loading, setLoading] = React.useState<boolean>(false);

  const [location, setLocation] = React.useState<any>(null);
  const [errorMsg, setErrorMsg] = React.useState<null | string>(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    setLocation(location);
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (result.assets !== null && result.assets.length > 0) {
      setNewImage(result.assets[0].uri);
    }

    console.log(images);
  };

  const handleSend = async () => {
    setLoading(true);
    const formData: any = {};
    let newConversationItems = [];
    if (newImage !== "") {
      formData.image = newImage;

      newConversationItems.push({
        sender: "user",
        message: "",
        image: newImage,
        description: "",
        loading: false,
      });
    }
    if (newMessages !== "") {
      formData.input_string = newMessages;
      newConversationItems.push({
        sender: "user",
        message: newMessages,
        image: "",
        description: "",
        loading: false,
      });
    }

    setConversations((prevConversations) => [
      ...prevConversations,
      ...newConversationItems,
      {
        sender: "geniva",
        message: "",
        image: "",
        description: "",
        loading: true,
      },
    ]);
    try {
      // console.log("location =", location);
      formData.lat = location.coords.latitude;
      formData.lon = location.coords.longitude;
      const userID = await AsyncStorage.getItem("geniva_user_id");
      // console.log("userID = ", userID);
      console.log("FormData = ", formData);
      const path = `${baseURL}/ai/${userID}`;
      console.log("path = ", path);
      const response = await axios.post(`${baseURL}/ai/${userID}`, formData, {
        timeout: 20000,
      });
      console.log("response.data = ", response.data);
      if (response.data.success) {
        setConversations((prevConversations) => {
          const updatedConversations = [...prevConversations];
          if (updatedConversations.length > 0) {
            updatedConversations[updatedConversations.length - 1].loading =
              false;
          }
          updatedConversations[updatedConversations.length - 1].data =
            response.data;
          updatedConversations[updatedConversations.length - 1].description =
            response.data.description
              ? response.data.description
              : "Berikut saran untuk anda";
          return updatedConversations;
        });
      }
    } catch (error) {
      console.log(error as any);
      Alert.alert("Error", "Error while sending message");
    } finally {
      setLoading(false);
      setNewMessages("");
      setNewImage("");
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="relative flex-1">
        <ChatBotHeader />

        {/* Body */}
        <ScrollView
          className="flex-1 bg-[#EBEBEB]"
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 16,
            paddingTop: 28,
          }}
        >
          <InitialGeniVATemplate />
          {conversations.map((conversation, index) => {
            if (conversation.sender === "user") {
              return (
                <UserMessage
                  key={index}
                  text={conversation.message}
                  image={conversation.image}
                />
              );
            } else {
              return (
                <GeniVAMessage
                  key={index}
                  loading={conversation.loading}
                  newResponse={index === conversations.length - 1}
                  description={conversation.description}
                  data={conversation.data as FoodMenus | TransportMenus}
                />
              );
            }
          })}
        </ScrollView>

        {/* Input */}
        <View className="bg-white pt-4 pb-4">
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              paddingHorizontal: 16,
              gap: 16,
            }}
            showsHorizontalScrollIndicator={false}
          >
            <Pressable
              className="border-[1px] border-[#D9D9D9] py-2 rounded-full px-2"
              onPress={() => setNewMessages("Promo saat ini")}
            >
              <Text className="text-[#6E6E6E]">Promo saat ini</Text>
            </Pressable>
            <Pressable
              className="border-[1px] border-[#D9D9D9] py-2 rounded-full px-2"
              onPress={() => setNewMessages("Pesan makanan dingin")}
            >
              <Text className="text-[#6E6E6E]">Pesan makanan dingin</Text>
            </Pressable>
            <Pressable
              className="border-[1px] border-[#D9D9D9] py-2 rounded-full px-2"
              onPress={() => setNewMessages("Menuju Monumen Nasional")}
            >
              <Text className="text-[#6E6E6E]">Menuju Monumen Nasional</Text>
            </Pressable>
          </ScrollView>
          <View className="w-full px-4 flex-row items-center mt-4">
            <Pressable
              className="bg-[#00B652] p-2 rounded-full"
              onPress={pickImage}
            >
              <Icon source="image-outline" color="white" size={24} />
            </Pressable>
            <View className="flex-1 mx-2 relative">
              <TextInput
                className={`${
                  newImage !== "" ? "pt-2 pb-20" : "py-2 max-h-24"
                } w-full rounded-xl border-[1px] border-[#D9D9D9] px-3`}
                multiline
                placeholder="Bagaimana GeniVA bisa membantu?"
                value={newMessages}
                onChangeText={(text) => setNewMessages(text)}
              />
              {newImage !== "" && (
                <Image
                  source={{ uri: newImage }}
                  className="absolute w-16 h-16 rounded-xl bottom-2 left-3"
                />
              )}
            </View>
            <Pressable onPress={handleSend}>
              <Icon source="send" color="#00B652" size={28} />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default index;
